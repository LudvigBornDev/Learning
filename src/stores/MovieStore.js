import { defineStore } from 'pinia'

// export const useCounterStore = defineStore('counter', () => {
//   const count = ref(0)
//   const doubleCount = computed(() => count.value * 2)
//   function increment() {
//     count.value++
//   }

//   return { count, doubleCount, increment }
// })

export const useMovieStore = defineStore('movieStore', {
  state: () => ({
    movies: [
      {
        id: 1,
        original_title: 'Inception',
        overview:
          'A thief who enters the dreams of others to steal secrets from their subconscious is given a chance to erase his past crimes.',
        poster_path: 'Inception.webp',
        release_date: '2010-07-16',
        isWatched: true,
      },
      {
        id: 2,
        original_title: 'The Matrix',
        overview:
          'A computer hacker learns about the true nature of reality and his role in the war against its controllers.',
        poster_path: 'The_Matrix.webp',
        release_date: '1999-03-31',
        isWatched: false,
      },
      {
        id: 3,
        original_title: 'Interstellar',
        overview:
          "A team of explorers travels through a wormhole in space in an attempt to ensure humanity's survival.",
        poster_path: 'Interstellar.webp',
        release_date: '2014-11-07',
        isWatched: true,
      },
    ],
    activeTab: 2,
  }),
  getters: {
    watchedMovie() {
      return this.movies.filter((el) => el.isWatched)
    },
    totalCountMovies() {
      return this.movies.length
    },
    countWatchedMovie() {
      return this.movies.filter((el) => el.isWatched).length
    },
  },
  actions: {
    setActiveTab(tabNum) {
      this.activeTab = tabNum
    },
    toggleWatche(id) {
      const idx = this.movies.findIndex((el) => el.id === id)
      this.movies[idx].isWatched = !this.movies[idx].isWatched
    },
    deleteMovie(id) {
      const idx = this.movies.findIndex((el) => el.id === id)
      this.movies.splice(idx, 1)
    },
  },
})

// movies: [
//   {
//     id: 1,
//     original_title: 'Inception',
//     overview:
//       'A thief who enters the dreams of others to steal secrets from their subconscious is given a chance to erase his past crimes.',
//     poster_path: 'Inception.webp',
//     release_date: '2010-07-16',
//     isWatched: true,
//   },
//   {
//     id: 2,
//     original_title: 'The Matrix',
//     overview:
//       'A computer hacker learns about the true nature of reality and his role in the war against its controllers.',
//     poster_path: 'The_Matrix.webp',
//     release_date: '1999-03-31',
//     isWatched: false,
//   },
//   {
//     id: 3,
//     original_title: 'Interstellar',
//     overview:
//       "A team of explorers travels through a wormhole in space in an attempt to ensure humanity's survival.",
//     poster_path: 'Interstellar.webp',
//     release_date: '2014-11-07',
//     isWatched: true,
//   },
// ],
