<script setup>
import { useMovieStore } from '@/stores/MovieStore';
const MovieStore = useMovieStore();
useMovieStore
defineProps({
    movie: {
        type:Object,
        required:true,
        default: () => {}
    }
})
// console.log(movie.poster_path)
</script>

<template>
    <div class="movie">
        <img :src="`./src/assets/img/${movie.poster_path}`" :alt="movie.poster_path" class="movie-img">
        <div>
            <div class="movie-name">
                {{ movie.original_title }} ({{ movie.release_date }})
            </div>

                <div class="movie-overview">{{ movie.overview }}</div>
                <!-- {{ movie.isWatched ? "Yes" : "No"}} -->
                  <div class="movie-buttons">
                    <button @click="MovieStore.toggleWatche(movie.id)" class="btn movie-buttons-watched">
                      <span v-if="!movie.isWatched">Watched</span>
                      <span v-else>Unwatched</span>
                    </button>
                    <button @click="MovieStore.deleteMovie(movie.id)" class="btn movie-buttons-delete">delete</button>
                  </div>
        </div>

    </div>

</template>

<style scoped>

.btn {
  border: none;
  width: 100px;
  height: 40px;
  font-size: 14px;
  margin: 0 10px;
  border-radius: 10px;
  cursor: pointer;
  background: #efefef;
}
.btn:hover {
  opacity: 0.7;
}
.btn_green {
  background: #37df5c;
}

.movie {
  display: grid;
  grid-template-columns: 200px 1fr;
  column-gap: 30px;
  margin-bottom: 20px;
  border: 2px solid #efefef;
  padding: 10px;
  border-radius: 10px;
}

.movie-accept {
  margin-right: 10px;
}

.movie-img {
  width: 200px;
  height: 200px;
  object-fit: cover;
  border-radius: 50%;
}

.movie-name {
  display: flex;
  align-items: center;
  font-size: 20px;
  margin-bottom: 20px;
}

.movie-overview {
  display: block;
  margin-bottom: 20px;
}

.movie-buttons {
  display: flex;
  align-items: center;
  justify-content: center;
}

.movie-buttons-watched {
  color: #fff;
  background: #1eb4c3;
}

.movie-buttons-watched__icon {
  width: 15px;
  margin-left: 10px;
}

.movie-buttons-delete {
  color: #fff;
  background: #ff2a2a;
}
</style>
