<template>
  <contactbar :windowWidth="windowWidth" :windowHeight="windowHeight" />
  <navbar :windowWidth="windowWidth" :windowHeight="windowHeight" />
  <router-view id="content" />
</template>

<script>
import Contactbar from "@/components/Contactbar.vue";
import Navbar from "@/components/Navbar.vue";

export default {
  name: "App",
  components: {
    Contactbar,
    Navbar,
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

#app {
  font-family: "Raleway", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  font-size: 2.5em;
  width:100%;
  min-width: 364px;
}

#content {
  margin-top: 30px;
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
</style>
