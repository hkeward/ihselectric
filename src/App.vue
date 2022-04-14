<template>
  <div id="scroll_area">
    <div id="main_content">
      <contactbar :windowWidth="windowWidth" :windowHeight="windowHeight" />
      <navbar :windowWidth="windowWidth" :windowHeight="windowHeight" />
      <div id="content-wrapper">
        <router-view id="content" />
        <content-footer id="footer" />
      </div>
    </div>
    <div
      id="scrollbar_margin"
      :style="{ 'min-width': scrollbar_width + 'px' }"
    ></div>
  </div>
</template>

<script>
import Contactbar from "@/components/Contactbar.vue";
import Navbar from "@/components/Navbar.vue";
import ContentFooter from "@/components/ContentFooter.vue";

export default {
  name: "App",
  components: {
    Contactbar,
    Navbar,
    ContentFooter,
  },
  data() {
    return {
      windowWidth: 0,
      windowHeight: 0,
      scrollbar_width: 0,
    };
  },
  methods: {
    onResize() {
      this.windowWidth = window.innerWidth;
      this.windowHeight = window.innerHeight;

      // From https://stackoverflow.com/a/59530904
      // Creating invisible container
      const outer = document.createElement("div");
      outer.style.visibility = "hidden";
      outer.style.overflow = "scroll"; // forcing scrollbar to appear
      outer.style.msOverflowStyle = "scrollbar"; // needed for WinJS apps
      document.body.appendChild(outer);

      // Creating inner element and placing it in the container
      const inner = document.createElement("div");
      outer.appendChild(inner);

      // Calculating difference between container's full width and the child width
      this.scrollbar_width = outer.offsetWidth - inner.offsetWidth;

      // Removing temporary elements from the DOM
      outer.parentNode.removeChild(outer);
    },
  },
  mounted() {
    this.$nextTick(() => {
      window.addEventListener("resize", this.onResize);
      this.onResize();
    });
  },
  beforeUnmount() {
    window.removeEventListener("resize", this.onResize);
  },
};
</script>

<style lang="less">
@import (css)
  url("https://fonts.googleapis.com/css2?family=Lora&family=Send+Flowers&family=Share+Tech+Mono&display=swap");

html {
  font-size: 100%;
}

#app {
  font-family: "Lora", serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  font-size: 2.5em;
  width: 100%;
  min-width: 364px;
  height: 100vh;
  display: flex;
  flex-direction: column;
}

#scroll_area {
  display: flex;
}

#main_content {
  width: 100%;
  display: flex;
  flex-direction: column;
}

#scrollbar_margin {
  display: none;
}

#content-wrapper {
  display: flex;
  flex-direction: column;
  height: 100vh;
  justify-content: space-between;
}

#footer {
  align-self: flex-end;
}

#content {
  margin: 2% 5%;
}

body {
  margin: 0;
  background: #ecc554;
}

a {
  color: inherit;
  text-decoration: none;
}

.icon_button:hover {
  cursor: pointer;
}

#footer {
  width: 100%;
}
</style>
