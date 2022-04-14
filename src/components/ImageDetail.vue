<template>
  <div id="image_detail" :style="image_detail_style">
    <div v-if="index !== null" id="zoomed_image_container">
      <div id="nav_left" @click="$emit('navLeft')">
        <div class="nav_flex"></div>
        <div class="nav_flex arrow">
          <font-awesome-icon
            icon="arrow-left"
            :style="arrow_left_style"
            :class="hoverable('left')"
          />
        </div>
        <div class="nav_flex"></div>
      </div>
      <div id="image_container" @click="$emit('close')">
        <div class="flex_spacer"></div>
        <img :src="images[index]['src']" class="zoomed_image" />
        <div class="flex_spacer"></div>
      </div>
      <div id="nav_right" @click="$emit('navRight')">
        <div id="nav_close" class="nav_flex" @click="$emit('close')">
          <font-awesome-icon
            :icon="['far', 'circle-xmark']"
            id="close_button"
            class="hover"
          />
        </div>
        <div class="nav_flex arrow">
          <font-awesome-icon
            icon="arrow-right"
            :style="arrow_right_style"
            :class="hoverable('right')"
          />
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
    arrow_left_style() {
      if (this.index === 0) {
        return {
          opacity: 0.1,
        };
      } else {
        return {
          opacity: 1,
        };
      }
    },
    arrow_right_style() {
      if (this.index === this.images.length - 1) {
        return {
          opacity: 0.1,
        };
      } else {
        return {
          opacity: 1,
        };
      }
    },
  },
  methods: {
    handleKeyup(event) {
      if (event.keyCode === 37) {
        this.$emit("navLeft");
      } else if (
        event.keyCode === 39 ||
        event.keyCode === 32 ||
        event.keyCode === 13
      ) {
        this.$emit("navRight");
      } else if (event.keyCode === 27) {
        this.$emit("close");
      }
    },
    hoverable(dir) {
      if (
        (dir === "left" && this.index === 0) ||
        (dir === "right" && this.index === this.images.length - 1)
      ) {
        return "no_hover";
      } else {
        return "hover";
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
  mounted() {
    window.addEventListener("keyup", this.handleKeyup);
  },
  beforeUnmount() {
    window.removeEventListener("keyup", this.handleKeyup);
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

.hover:hover {
  cursor: pointer;
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
