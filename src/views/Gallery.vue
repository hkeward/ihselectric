<template>
  <div id="gallery">
    <div id="gallery_header">
      <h3>Gallery</h3>
    </div>
    <div id="gallery_content">
      <ImageGallery
        :images="images"
        :index="index"
        :disable-scroll="true"
        @close="index = null"
      />

      <ul>
        <li
          v-for="(image, imageIndex) in images"
          :key="imageIndex"
          @click="index = imageIndex"
        >
          <img :src="image.src" />
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import ImageGallery from "@/components/ImageGallery.vue";

export default {
  name: "Gallery",
  data() {
    return {
      images: [
        {
          title: "kitten 1",
          src: "https://placekitten.com/801/800",
        },
        {
          title: "kitten 2",
          src: "https://placekitten.com/802/800",
        },
        {
          title: "kitten 3",
          src: "https://placekitten.com/803/800",
        },
        {
          title: "kitten 4",
          src: "https://placekitten.com/804/800",
        },
        {
          title: "kitten 5",
          src: "https://placekitten.com/805/800",
        },
      ],
      index: null,
    };
  },
  components: {
    ImageGallery,
  },
};
</script>

<style>
#gallery_header {
  text-align: left;
}
</style>
