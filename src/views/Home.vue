<template>
  <div>
    <div id="bio_container">
      <div id="bio">
        <img
          src="~@/assets/dave.jpg"
          style="border-radius: 50%; max-width: 320px"
        />
        <br />
        Master electrician <strong>Dave Schwartzentruber</strong> can keep you
        wired!
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

#bio_container {
  flex: 65%;
}

#bio {
  margin-right: 50px;
  margin-bottom: 50px;
}

#emailbox_container {
  display: flex;
  align-items: flex-start;
  justify-content: center;
  flex: 35%;
}

#emailbox {
  flex-grow: 1;
}
</style>
