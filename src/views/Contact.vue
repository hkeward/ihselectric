<template>
  <div>
    <div id="contact">
      <div>Contact info</div>
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
</style>
