<template>
  <div>
    <div id="bio">
      <div id="main_image_container">
        <img id="main_image" src="~@/assets/dave_pit.jpg" />
      </div>
      <div id="home_details_wrapper">
        <h5 style="margin-top: 0; margin-bottom: 5px">
          Master electrician Dave Schwartzentruber can keep you wired!
        </h5>
        <p id="home_details">
          With 30 years of experience, Dave with the addition of his apprentice,
          deliver quality craftsmanship with an eye for detail. Having
          specialized for years in the rewiring of older homes and experience in
          new developments, IHS Electric can help meet a wide array of needs.
          Serving the greater Stratford and KW area since 1992.
        </p>
      </div>
    </div>

    <div id="emailbox_container">
      <emailbox id="emailbox" />
    </div>
  </div>
</template>

<script>
import Emailbox from "@/components/Emailbox.vue";

export default {
  name: "Home",
  components: {
    Emailbox,
  },
};
</script>

<style scoped lang="less">
#content {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: stretch;
}

#bio {
  flex: 2;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: space-between;
  flex-wrap: wrap;
}

#main_image_container {
  display: flex;
  justify-content: center;
}

#main_image_container,
#home_details_wrapper {
  flex: 1;
  margin-bottom: 15px;
  padding: 0 15px;
}

#emailbox_container {
  display: flex;
  align-items: flex-start;
  justify-content: center;
  flex: 1;
}

#emailbox {
  flex-grow: 1;
}

#home_details {
  font-size: 65%;
}

#home_details_wrapper {
  display: flex;
  flex-direction: column;
}

#main_image {
  min-width: 320px;
  max-width: 100%;
  border-radius: 7px;
  border: 2px solid #2d3333;
}
</style>
