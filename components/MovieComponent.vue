<template>


  <ul>
    <li v-for="movie in movies">
      {{ movie.title }}
    </li>
  </ul>
</template>

<script>
    export default {
        computed: {
            movies() {
                return this.$store.getters['movie/getMovies']
            }
        },
    }
</script>

<style lang="scss" scoped>

</style>
