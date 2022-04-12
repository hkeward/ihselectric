<template>
  <div id="image_detail" :style="image_detail_style" @click="$emit('close')">
    <div v-if="index !== null" id="zoomed_image_container">
      <div id="nav_left">
        <div class="nav_flex"></div>
        <div class="nav_flex arrow">
          <font-awesome-icon icon="arrow-left" />
        </div>
        <div class="nav_flex"></div>
      </div>
      <div id="image_container">
        <div class="flex_spacer"></div>
        <img :src="images[index]['src']" class="zoomed_image" />
        <div class="flex_spacer"></div>
      </div>
      <div id="nav_right">
        <div id="nav_close" class="nav_flex">
          <font-awesome-icon
            :icon="['far', 'circle-xmark']"
            id="close_button"
          />
        </div>
        <div class="nav_flex arrow">
          <font-awesome-icon icon="arrow-right" />
        </div>
        <div class="nav_flex"></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ImageDetail",
  props: {
    images: Object,
    index: Number,
  },
  computed: {
    image_detail_style() {
      var menu_height = Math.max(
        document.body.offsetHeight,
        document.body.scrollHeight
      );

      if (this.index !== null) {
        return {
          display: "flex",
          position: "fixed",
          left: "0px",
          top: "0px",
          height: menu_height + "px",
        };
      } else {
        return {
          display: "none",
        };
      }
    },
  },
  watch: {
    index() {
      if (this.index !== null) {
        document.body.style.overflow = "hidden";
      } else {
        document.body.style.overflow = "auto";
      }
    },
  },
};
</script>

<style scoped>
#image_detail {
  background-color: rgba(0, 0, 0, 0.8);
  justify-content: center;
  align-items: flex-start;
  width: 100%;
}

#zoomed_image_container {
  display: flex;
  width: 100%;
  align-items: center;
  gap: 1%;
}

#nav_left,
#nav_right {
  height: 100vh;
  flex: 1;
  color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  padding: 0 20px;
}

.nav_flex {
  flex: 1;
}

#close_button {
  padding: 20px 0;
}

.arrow {
  display: flex;
  align-items: center;
}

#image_container {
  flex: 100;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
}

.flex_spacer {
  min-height: 2vh;
}

.zoomed_image {
  max-width: 100%;
  max-height: 96vh;
  user-select: none;
  border-radius: 8px;
}
</style>
