<template>
  <div id="contactbar">
    <div
      id="phone_number"
      v-bind:style="windowWidth < 700 ? 'flex: 1;' : 'flex: unset;'"
    >
      <font-awesome-icon icon="phone-alt" class="fa-xs icon" />519-301-5606
    </div>
    <div v-if="windowWidth > 700" id="email">
      <a href="mailto:ihselectric@yahoo.com" target="_blank">
        <font-awesome-icon
          icon="envelope"
          class="fa-xs icon"
        />ihselectric@yahoo.com</a
      >
    </div>
  </div>
</template>

<script>
export default {
  name: "Contactbar",
  props: {
    windowWidth: Number,
    windowHeight: Number,
  },
};
</script>

<style lang="less">
#contactbar {
  background: #2c998c;
  display: flex;
  justify-content: space-between;
  font-size: 0.75em;
  font-weight: 600;
  height: 55px;
}

#phone_number,
#email {
  margin: 10px;
}

.icon {
  margin-right: 10px;
}
</style>
