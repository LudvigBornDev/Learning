import { defineStore } from "pinia";
const url = 
"https://api.themoviedb.org/3/search/movie?api_key=8f8aff6f9f3bceefc378630509ed2958&query="

export const useSearchStore = defineStore("searchStore",{
    state:()=>({
        loader: false,
        movies: []
    }),
    actions: {
        async getMovies(search) {
            this.loader = true
            const res = await fetch(`${url}${search}`)
            const data = await res.json()
            console.log(data)
            this.movies = data.results
            this.loader = false
        }
    }
})