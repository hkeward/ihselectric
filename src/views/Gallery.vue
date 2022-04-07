<template>
  <div id="gallery">
    <div id="gallery_header">
      <h3>Gallery</h3>
    </div>
    <div id="gallery_content">
      <img
        class="image"
        v-for="(image, i) in images"
        :src="image"
        :key="i"
        @click="index = i"
      />
      <vue-gallery-slideshow
        :images="images"
        :index="index"
        @close="index = null"
      ></vue-gallery-slideshow>
    </div>
  </div>
</template>

<script>
import VueGallerySlideshow from "vue-gallery-slideshow";

export default {
  name: "Gallery",
  components: {
    VueGallerySlideshow,
  },
  data() {
    return {
      images: [
        "https://placekitten.com/801/800",
        "https://placekitten.com/802/800",
        "https://placekitten.com/803/800",
        "https://placekitten.com/804/800",
        "https://placekitten.com/805/800",
      ],
      index: null,
    };
  },
};
</script>

<style>
#gallery_header {
  text-align: left;
}
</style>
