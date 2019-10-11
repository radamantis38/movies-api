<template>
  <div class="container">
    <movie-component/>
  </div>
</template>



<script>
import MovieComponent from '~/components/MovieComponent.vue';
export default {
    layout: 'layouts/default',
    components: {
        MovieComponent
    },
    async fetch({ store }) {
        await store.dispatch('movie/loadMovies')
    },

};
</script>

<style>

</style>
