<template>
  <contactbar :windowWidth="windowWidth" :windowHeight="windowHeight" />
  <navbar :windowWidth="windowWidth" :windowHeight="windowHeight" />
  <div id="content-wrapper">
    <router-view id="content" />
    <content-footer id="footer" />
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
    };
  },
  methods: {
    onResize() {
      this.windowWidth = window.innerWidth;
      this.windowHeight = window.innerHeight;
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
  url("https://fonts.googleapis.com/css2?family=Raleway:wght@400;500;600&display=swap");

html {
  font-size: 100%;
}

#app {
  font-family: "Raleway", sans-serif;
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
  margin: 30px;
}

body {
  margin: 0;
  background: url("~@/assets/background.jpeg"), #010823;
  background-repeat: no-repeat;
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
