<template>
  <div id="image_detail" :style="image_detail_style" @click="$emit('close')">
    <div v-if="index !== null" id="zoomed_image_container">
      <div id="nav_left">
        <div>&lt;</div>
      </div>
      <div id="image_container">
        <img :src="images[index]['src']" class="zoomed_image" />
      </div>
      <div id="nav_right"><div>></div></div>
      <div id="image_navigation"></div>
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
  align-items: center;
  justify-content: center;
  padding: 10px;
}

#image_container {
  flex: 100;
}

.zoomed_image {
  max-width: 100%;
  max-height: 100vh;
  user-select: none;
  border-radius: 8px;
}
</style>
