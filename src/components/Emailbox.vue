<template>
  <div id="emailbox">
    <div id="email_header">
      <h4 id="quote_header_text">Request A Quote</h4>
      <p id="quote_info">
        Fill out the form below and we'll get in touch within 24 hours.
      </p>
    </div>
    <div id="email_form">
      <div id="copy_sender_container">
        <input type="checkbox" id="copy_sender" v-model="copy_sender" />
        <label for="copy_sender" class="quote"
          >Send a copy to my email address</label
        >
      </div>
      <input
        v-model="sender_email"
        placeholder="Email..."
        class="quote quote_input"
        :style="email_input_style"
      />
      <input
        v-model="sender_name"
        placeholder="Your name..."
        class="quote quote_input"
      />
      <input
        v-model="sender_phone_number"
        placeholder="Phone number..."
        class="quote quote_input"
        :style="phone_number_input_style"
      />
      <input
        v-model="subject"
        placeholder="Subject..."
        class="quote quote_input"
      />
      <textarea
        v-model="message"
        placeholder="Message..."
        id="sender_message"
        class="quote quote_input"
        :style="message_input_style"
      />

      <div v-if="email_send_attempted" id="email_send_success_failure">
        <div v-if="form_data_invalid" class="failure">
          {{ form_validation_message }}
        </div>
        <div v-else-if="email_send_success" class="success">
          Email sent successfully! We'll get back to you ASAP.
        </div>
        <div v-else class="failure">
          Email send failed; try again later, or try emailing
          <strong
            ><u
              ><a
                href="mailto:ihselectric@yahoo.com?subject=Quote requested"
                target="_blank"
                >ihselectric@yahoo.com</a
              ></u
            ></strong
          >
          directly
        </div>
      </div>
    </div>

    <button
      id="submit_button"
      :data-sitekey="recaptcha_siteky"
      class="g-recaptcha"
      @click="send_email"
    >
      <strong>Submit</strong>
    </button>
  </div>
</template>

<script>
export default {
  name: "Emailbox",
  data() {
    return {
      copy_sender: false,
      sender_email: "",
      sender_name: "",
      sender_phone_number: "",
      subject: "",
      message: "",
      email_send_attempted: false,
      email_send_success: undefined,
      form_data_invalid: false,
      form_validation_message: "",
      email_invalid: false,
      phone_number_invalid: false,
      message_invalid: false,
    };
  },
  computed: {
    recaptcha_siteky() {
      return process.env.VUE_APP_RECAPTCHA_SITE_KEY;
    },
    email_input_style() {
      if (this.email_invalid) {
        return {
          "border-color": "red",
        };
      } else {
        return {
          "border-color": "transparent",
        };
      }
    },
    phone_number_input_style() {
      if (this.phone_number_invalid) {
        return {
          "border-color": "red",
        };
      } else {
        return {
          "border-color": "transparent",
        };
      }
    },
    message_input_style() {
      if (this.message_invalid) {
        return {
          "border-color": "red",
        };
      } else {
        return {
          "border-color": "transparent",
        };
      }
    },
  },
  methods: {
    reset_form() {
      this.copy_sender = false;
      this.sender_email = "";
      this.sender_name = "";
      this.sender_phone_number = "";
      this.subject = "";
      this.message = "";
      this.form_data_invalid = false;
      this.form_validation_message = "";
    },
    check_form_data() {
      var is_invalid = false;
      var message = "";

      if (this.copy_sender && this.sender_email === "") {
        is_invalid = true;
        message =
          "If you want a copy of the email sent to you, you must fill out the email address field";
        this.email_invalid = true;
      } else if (this.sender_email === "" && this.sender_phone_number === "") {
        is_invalid = true;
        message = "Please provide email address, phone number, or both";
        this.email_invalid = true;
        this.phone_number_invalid = true;
      } else if (this.message === "") {
        is_invalid = true;
        message =
          "Please write a description of the type of work you would like done";
        this.message_invalid = true;
      } else {
        is_invalid = false;
        message = "";
      }

      this.form_data_invalid = is_invalid;
      this.form_validation_message = message;
    },
    async send_email(token) {
      if (token.isTrusted) {
        this.email_invalid = false;
        this.phone_number_invalid = false;
        this.message_invalid = false;

        this.email_send_attempted = true;

        this.check_form_data();
        if (this.form_data_invalid) {
          return;
        } else {
          var form_data = {
            sender_email: this.sender_email,
            sender_name: this.sender_name,
            sender_phone_number: this.sender_phone_number,
            subject: this.subject,
            message: this.message,
            copy_sender: this.copy_sender,
          };

          // Ensure this div is not showing before getting a response to avoid flashing an error before showing success
          this.email_send_attempted = false;

          try {
            const response = await fetch(
              `${process.env.VUE_APP_BASE_URL}/api/send_email`,
              {
                method: "POST",
                headers: {
                  Accept: "application/json",
                  "Content-Type": "application/json",
                },
                body: JSON.stringify(form_data),
              }
            );
            await response.json();
            this.email_send_success = true;
            this.email_send_attempted = true;
            this.reset_form();
          } catch (e) {
            console.error(e);
            this.email_send_success = false;
            this.email_send_attempted = true;
          }
        }
      } else {
        this.email_send_success = false;
        this.email_send_attempted = true;
        console.error(
          "Failed captcha -- untrusted attempt at quote request; blocking."
        );
      }
    },
  },
  mounted() {
    let recaptchaScript = document.createElement("script");
    recaptchaScript.setAttribute(
      "src",
      "https://www.google.com/recaptcha/api.js"
    );
    document.head.appendChild(recaptchaScript);
  },
};
</script>

<style lang="less">
#emailbox {
  border-radius: 15px;
  background: #2c998c;
  display: flex;
  flex-direction: column;
  min-width: 364px;
}

#email_header,
#email_form,
#submit_button {
  border-width: 0 5px;
  border-style: solid;
  border-color: transparent;
}

#email_header {
  border-radius: 15px 15px 0 0;
  align-items: flex-start;
  padding: 0 1em;
  background: black;
  color: white;
}

#quote_info {
  font-size: 50%;
  margin-bottom: 0.5em;
}

#email_form {
  border-color: black;
  display: flex;
  flex-direction: column;
  padding: 0 1em;
}

#email_send_success_failure {
  padding-bottom: 1em;
  font-size: 60%;
}

.success,
.failure {
  padding: 0.5em;
  border-radius: 15px;
}

.success {
  border: 3px solid lightgreen;
}

.failure {
  border: 3px solid red;
}

.quote {
  font-family: monospace;
  font-size: 50%;
  text-align: left;
}

.quote_input {
  margin: 0 0 1em 0;
  min-height: 30px;
  border-width: 2px;
  border-color: transparent;
}

#sender_message {
  min-height: 100px;
}

#submit_button {
  border-radius: 0 0 15px 15px;
  padding: 0;
  margin: 0;
  border: none;
  min-height: 50px;
  background-color: black;
  color: white;
  font-size: 50%;
}

#submit_button:hover {
  cursor: pointer;
}

#copy_sender_container {
  display: flex;
  padding: 0.2em 0;
  align-items: center;
}

#copy_sender {
  margin-left: 0;
  margin-right: 1em;
  zoom: 1.5;
}

#sender_message {
  resize: vertical;
}

#quote_header_text {
  margin: 0.5em 0;
}
</style>
