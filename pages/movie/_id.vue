<script lang="ts">
import Vue from 'vue'
import { API_PARAMS } from '~/api'
import MovieDescribeListItem from '~/components/MovieDescribeListItem.vue'
export default Vue.extend({
  components: { MovieDescribeListItem },

  async asyncData ({ params, $axios }) {
    const url = await `https://api.themoviedb.org/3/movie/${params.id}`

    const response = await $axios.get(url, {
      params: {
        api_key: API_PARAMS.key,
        language: API_PARAMS.language
      }
    })

    return await { movie: response.data }
  },

  head () {
    return { title: this.movie?.title }
  },

  computed: {
    image () {
      if (this.movie) {
        const url = 'https://image.tmdb.org/t/p/'
        const size = 'w400'
        return url + size + this.movie.poster_path
      }

      return ''
    },

    genres () {
      if (this.movie) {
        return this.movie.genres.map(el => el.name).join(', ')
      }

      return ''
    },

    date () {
      if (this.movie) {
        const options = { day: 'numeric', month: 'long', year: 'numeric' }
        return new Date(this.movie.release_date).toLocaleString('ru-RU', options)
      }

      return ''
    }
  }
})
</script>

<template>
  <div>
    <BaseBackward />
    <div class="grid grid-cols-2">
      <img :src="image" :alt="movie.title" width="400">
      <div class="col-start-2">
        <div class="mb-5">
          <h1 class="text-2xl font-bold">
            {{ movie.title }}
          </h1>
          <h2 class="text-sm font-semibold italic opacity-70">
            {{ movie.tagline }}
          </h2>
        </div>
        <dl class="mb-5">
          <MovieDescribeListItem name="Жанр" :value="genres" />
          <MovieDescribeListItem name="Год выхода" :value="date" />
          <MovieDescribeListItem name="Оригинальное название" :value="movie.original_title" />
        </dl>
        <p class="col-start-2">
          {{ movie.overview }}
        </p>
      </div>
    </div>
  </div>
</template>
