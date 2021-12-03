<script lang="ts">
import Vue from 'vue'
import MoviesItem from './MoviesItem.vue'
import { API_PARAMS } from '@/api'

export default Vue.extend({
  components: { MoviesItem },

  data: () => ({
    movies: []
  }),

  async fetch () {
    const url = 'https://api.themoviedb.org/3/trending/movie/day'

    const response = await this.$axios.get(url, {
      params: {
        api_key: API_PARAMS.key,
        language: API_PARAMS.language
      }
    })

    this.movies = await response.data.results
  }
})
</script>

<template>
  <div>
    <BasePageTitle>Популярные фильмы</BasePageTitle>

    <p v-if="$fetchState.pending">
      Загружаем список...
    </p>
    <p v-else-if="$fetchState.error" class="text-red-400">
      При загрузке что то пошло не так
    </p>

    <ul v-else class="grid grid-cols-[repeat(auto-fit,minmax(300px,1fr))] gap-5">
      <li v-for="movie in movies" :key="movie.id">
        <MoviesItem :id="movie.id" :img-path="movie.poster_path" :title="movie.title" />
      </li>
    </ul>
  </div>
</template>
