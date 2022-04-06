<template>
  <div>
    <div id="contact">
      <div id="general_info">
        <h1>Contact info</h1>
        <p>
          Email: ihselectric@yahoo.com (or fill out the contact form below to
          request a quote)
        </p>
        <p>Phone: 519-301-5606</p>
      </div>
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

#general_info {
  margin-bottom: 2%;
  text-align: left;
}
</style>
