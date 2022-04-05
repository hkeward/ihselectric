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
          >Send a copy to your email address</label
        >
      </div>
      <input
        v-model="sender_email"
        placeholder="Email..."
        class="quote quote_input"
      />
      <input
        v-model="sender_subject"
        placeholder="Subject..."
        class="quote quote_input"
      />
      <input
        v-model="sender_phone_number"
        placeholder="Phone number..."
        class="quote quote_input"
      />
      <textarea
        v-model="sender_message"
        placeholder="Message..."
        id="sender_message"
        class="quote quote_input"
      />
    </div>
    <button id="submit_button" @click="log_message">
      <strong>Submit</strong>
    </button>
  </div>
</template>

<script>
export default {
  name: "Emailbox",
  data() {
    return {
      sender_email: "",
      copy_sender: false,
      sender_subject: "",
      sender_phone_number: "",
      sender_message: "",
    };
  },
  methods: {
    log_message() {
      console.log(this.sender_email);
      console.log(this.sender_subject);
      console.log(this.sender_phone_number);
      console.log(this.sender_message);
    },
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

.quote {
  font-family: monospace;
  font-size: 50%;
  text-align: left;
}

.quote_input {
  margin: 0 0 1em 0;
  min-height: 30px;
  border: none;
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
