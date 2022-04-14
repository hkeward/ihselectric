<template>
  <div id="gallery">
    <div id="gallery_header">
      <h3>Gallery</h3>
    </div>
    <div id="gallery_content">
      <ImageDetail
        :images="images"
        :index="index"
        :disable-scroll="true"
        @close="closeImageGallery"
        @navRight="navigateRight"
        @navLeft="navigateLeft"
      />

      <div id="image_thumbs">
        <div
          class="image_container"
          v-for="(image, imageIndex) in images"
          :key="imageIndex"
          @click="openImageGallery(imageIndex)"
        >
          <img :src="image.src" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ImageDetail from "@/components/ImageDetail.vue";

export default {
  name: "Gallery",
  data() {
    return {
      images: [],
      index: null,
      scrollbar_margin_element: null,
    };
  },
  components: {
    ImageDetail,
  },
  methods: {
    importAll(r) {
      r.keys().forEach((key) =>
        this.images.push({ src: r(key), pathShort: key })
      );
    },
    openImageGallery(imageIndex) {
      this.index = imageIndex;
      this.scrollbar_margin_element.style.display = "flex";
    },
    closeImageGallery() {
      this.index = null;
      this.scrollbar_margin_element.style.display = "none";
    },
    navigateLeft() {
      if (this.index !== null && this.index > 0) {
        this.index = this.index - 1;
      }
    },
    navigateRight() {
      if (this.index !== null && this.index < this.images.length - 1) {
        this.index = this.index + 1;
      }
    },
  },
  mounted() {
    this.importAll(require.context("../assets/gallery/", true, /\.jp(e|)g$/));
    this.scrollbar_margin_element = document.getElementById("scrollbar_margin");
  },
};
</script>

<style scoped>
#gallery_header {
  text-align: left;
}

#image_thumbs {
  display: flex;
  flex-flow: row wrap;
  align-items: center;
  gap: 15px;
}

.image_container {
  flex: 1;
}

.image_container > img {
  min-width: 200px;
  max-width: 100%;
  border-radius: 8px;
}
</style>
