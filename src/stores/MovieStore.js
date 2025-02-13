import { defineStore } from 'pinia'
import { ref, computed, watch } from 'vue'

export const useMovieStore = defineStore('movieStore', () => {
  const movies = ref([])
  const activeTab = ref(2)

  const moviesInLocalStorage = localStorage.getItem('movies')
  if (moviesInLocalStorage) {
    movies.value = JSON.parse(moviesInLocalStorage)
    console.log(JSON.parse(moviesInLocalStorage))
  }

  const watchedMovie = computed(() => {
    return movies.value.filter((el) => el.isWatched)
  })

  const totalCountMovies = computed(() => {
    movies.value.length
  })
  const countWatchedMovie = computed(() => {
    movies.value.filter((el) => el.isWatched).length
  })
  const setActiveTab = (tabNum) => {
    activeTab.value = tabNum
  }

  const toggleWatche = (id) => {
    const idx = movies.value.findIndex((el) => el.id === id)
    movies.value[idx].isWatched = !movies.value[idx].isWatched
  }
  const deleteMovie = (id) => {
    const idx = movies.value.findIndex((el) => el.id === id)
    movies.value.splice(idx, 1)
  }

  watch(
    () => movies.value,
    (state) => {
      localStorage.setItem('movies', JSON.stringify(state))
    },
    { deep: true },
  )

  return {
    movies,
    activeTab,
    watchedMovie,
    totalCountMovies,
    countWatchedMovie,
    setActiveTab,
    toggleWatche,
    deleteMovie,
  }
})
