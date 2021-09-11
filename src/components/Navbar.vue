<template>
  <div id="nav">
    <router-link to="/" @click="closeMenu" id="company_info">
      <img src="~@/assets/logo.transparent.100_130.gif" />
      <div class="link" id="company_name">IHS Electric</div>
    </router-link>
    <div>
      <div @click="toggleMenu" class="hamburger_icon">
        <font-awesome-icon icon="bars" class="fa-xs link" />
      </div>
      <ul class="nav_list" v-bind:style="navbarStyle">
        <li @click="toggleMenu" class="hamburger_icon" v-if="windowWidth < 450" id="hamburger_small_screen">
          <font-awesome-icon icon="bars" class="link" />
        </li>
        <li>
          <router-link to="/about" @click="closeMenu" class="link"
            >About Us</router-link
          >
        </li>
        <li>
          <router-link to="/services" @click="closeMenu" class="link"
            >Services</router-link
          >
        </li>
        <li>
          <router-link to="/gallery" @click="closeMenu" class="link"
            >Gallery</router-link
          >
        </li>
        <li>
          <router-link to="/contact" @click="closeMenu" class="link"
            >Contact Us</router-link
          >
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "Navbar",
  data() {
    return {
      navbarOpen: false,
    };
  },
  props: {
    windowWidth: Number,
    windowHeight: Number,
  },
  computed: {
    navbarStyle() {
      if (this.windowWidth > 1064) {
        return {};
      } else {
        if (this.navbarOpen === false) {
          return {
            display: "none",
          };
        } else {
          var menu_height;
          if (this.windowHeight < 550) {
            menu_height = 550;
          } else {
            menu_height = this.windowHeight - 155;
          }
          return {
            position: "absolute",
            padding: "0px",
            margin: "0px",
            height: menu_height + "px",
            width: "100%",
            top: "155px",
            left: "0px",
            background: "black",
          };
        }
      }
    },
  },
  methods: {
    toggleMenu() {
      this.navbarOpen = !this.navbarOpen;
    },
    closeMenu() {
      this.navbarOpen = false;
    },
  },
};
</script>

<style>
#nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: #2d3333;
  color: white;
  height: 100px;
}

#company_info {
  display: flex;
  align-items: center;
  font-weight: 500;
  color: white;
}

#company_name {
  white-space: nowrap;
  margin-left: 0px;
}

li {
  list-style: none;
}

.nav_list {
  display: flex;
  font-size: 0.75em;
}

.link {
  margin: 15px 20px;
}

a.router-link-exact-active,
.is-active {
  color: #2c998c;
}

.hamburger_icon {
  display: none;
}

@media (max-width: 1064px) {
  .hamburger_icon {
    display: block;
  }

  .nav_list {
    flex-direction: column;
  }

  .nav_list li {
    width: 100%;
    margin: 30px 0px;
  }
}

@media (max-width: 430px) {
  #nav {
    height: auto;
    flex-wrap: wrap;
    justify-content: center;
  }

  #hamburger_small_screen {
    margin: 0px;
  }
}
</style>
