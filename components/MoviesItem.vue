<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  props: {
    id: {
      type: Number,
      required: true
    },
    title: {
      type: String,
      required: true
    },
    imgPath: {
      type: String,
      required: true
    }
  },

  computed: {
    imgBg () {
      const url = 'https://image.tmdb.org/t/p/'
      const size = 'w400'
      return url + size + this.imgPath
    }
  }
})
</script>

<template>
  <div class="relative aspect-w-3 aspect-h-4 bg-no-repeat bg-cover bg-center" :style="`background-image:url(${imgBg});`">
    <NuxtLink :to="`/movie/${id}`" class="hover ">
      <div class="bg-gradient absolute bottom-0 w-full h-1/2 flex items-end p-6 bg-gradient-to-b from-transparent to-gray-900 overflow-hidden opacity-0 transition-opacity duration-350">
        <h2 class="title text-xl text-gray-100 font-semibold transform-gpu  translate-y-20 transition-transform duration-500">
          {{ title }}
        </h2>
      </div>
    </NuxtLink>
  </div>
</template>

<style scoped>
.hover:hover .bg-gradient {
  opacity: 1;
}

.hover:hover .title {
  transform: translate3d(0, 0, 0);
}
</style>
