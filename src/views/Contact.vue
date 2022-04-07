<template>
  <div>
    <div id="contact">
      <div id="contact_header">
        <h3>Contact info</h3>
      </div>
      <div id="contact_content">
        <div id="operating_hours">
          <h4>Hours of Operation</h4>
          <p>- Monday to Friday 8:30am - 6:30pm</p>
          <p>- Saturday by appointment</p>
        </div>
        <br />
        <div>
          <h4>Contact information</h4>
          <p>
            Email: ihselectric@yahoo.com (or fill out the contact form below to
            request a quote)
          </p>
          <p>Phone: 519-301-5606</p>
        </div>
      </div>
      <br />
      <emailbox />
    </div>
  </div>
</template>

<script>
import Emailbox from "@/components/Emailbox.vue";

export default {
  name: "Contact",
  components: { Emailbox },
};
</script>

<style scoped>
#contact {
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  justify-content: space-between;
}

#contact_header,
#contact_content {
  text-align: left;
}

#contact_content {
  font-size: 70%;
}
</style>
