<template>
  <div id="app">
    <m-header />
    
    <section class="section">
      <nav class="nav has-shadow container">
        <div class="container">
          <input 
            class="input is-large" 
            type="text" 
            placeholder="Buscar canciones" 
            v-model="searchQuery">
          <a class="button is-info is-large" @click="search">Buscar</a>
          <a class="button is-danger is-large">x</a>
        </div>
      </nav>
      <div class="container">
        <p>
          <small>
            {{ searchMessage }}
          </small>
        </p>
      </div>
      <div class="container results">
        <div class="columns">
          <div class="column" :key="t.name" v-for="t in tracks">
            {{ t.name }} - {{ t.artists[0].name }}
          </div>
        </div>
      </div>
    </section>

    <m-footer />
  </div>
</template>

<script>
import trackService from './services/track'
import mFooter from './components/layout/Footer.vue' 
import mHeader from './components/layout/Header.vue'

export default {
  name: 'app',

  components: { mFooter, mHeader },

  data () {
    return {
      searchQuery: '',
      tracks: []
    }
  },
  computed: {
    searchMessage() {
      return `Encontrados: ${this.tracks.length}`
    }
  },
  methods: {
    search() {
      if(!this.searchQuery) return
      trackService.search(this.searchQuery)
        .then(res => {
          this.tracks = res.tracks.items
        })
    }
  }
}
</script>

<style lang="scss">
  @import './scss/main.scss';

  .results {
    margin-top: 50px;
  }
</style>
