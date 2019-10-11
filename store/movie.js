export const state = () => ({
  movies: []
})

export const getters = {
  getMovies: state => {
    return state.movies
  },
}

export const mutations = {
  addMovies(state, movies) {
    state.movies = movies;
  },
}

export const actions = {
  async loadMovies({commit}) {
    const data = await this.$axios.$get('https://api.themoviedb.org/3/movie/popular?api_key=9b444f58d64bc8bfe5ffb6b59d41b0f5&language=es-ES&page=1')
    commit('addMovies', data.results)
  }
}
