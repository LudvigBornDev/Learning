<script setup>
  import { useMovieStore } from './stores/MovieStore';
  import Movie from './components/Movie.vue';
  import Search from './components/Search.vue';
  const MovieStore = useMovieStore();
</script>

<template>
  <main>
    <header class="header">
    <img src="./assets/img/logo.png" alt="" class="header-logo">
    <h2>My favorite movies</h2>

  </header>
  <div class="tabs">
    <button @click="MovieStore.setActiveTab(1)" class="btn"
    :class="{ 'btn_green': MovieStore.activeTab === 1 }">favorite</button>
    <button @click="MovieStore.setActiveTab(2)" class="btn" :class="{'btn_green' : MovieStore.activeTab != 1}">search</button>
  </div>


  <div class="movies" v-if="MovieStore.activeTab === 1">
    <div class="title">Watched movies<span> (Количество: {{ MovieStore.countWatchedMovie }})</span> </div>
      <!-- {{ MovieStore.movies }} -->
      <Movie v-for="movie in MovieStore.watchedMovie" :key="movie.id" :movie="movie">
      </Movie>
<div class="line"></div>
<div class="title">All movies <span> (Количество: {{ MovieStore.totalCountMovies }})</span></div>


        <Movie v-for="movie in MovieStore.movies" :key="movie.id" :movie="movie">

        </Movie>
    </div>
    <div class="search" v-else>
      <Search></Search>
    </div>
  </main>
</template>

<style scoped>
.title{
  font-size: larger;
  margin-bottom: 12px;
  font-weight: 700;
}

.line{
  width: auto;
  height: 4px;
  background: #efefef;
  margin: 20px 0 20px 0;
}

.header {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;

}
.header-logo {
  max-width: 50px;
  margin-right: 10px;
}
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

.tabs {
  display: flex;
  justify-content: center;
  margin-bottom: 30px;
}
</style>
