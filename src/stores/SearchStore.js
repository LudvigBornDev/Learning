import { defineStore } from 'pinia'
import { useMovieStore } from './MovieStore'
import { ref } from 'vue'
const url =
  'https://api.themoviedb.org/3/search/movie?api_key=8f8aff6f9f3bceefc378630509ed2958&query='

export const useSearchStore = defineStore('searchStore', () => {
  const loader = ref(false)
  const movies = ref([])

  const getMovies = async (search) => {
    loader.value = true
    const res = await fetch(`${url}${search}`)
    const data = await res.json()
    movies.value = data.results
    loader.value = false
  }

  const addToUserStore = (object) => {
    const movieStore = useMovieStore()
    movieStore.movies.push({ ...object, isWatched: false })
    movieStore.activeTab = 1
    console.log('work')
  }
  return {
    loader,
    movies,
    getMovies,
    addToUserStore,
  }
})
