<template>
  <main>
    <transition name="move">    
      <Notification v-show="showNotification">
        <p slot="body">No se encontraron resultados</p>
      </Notification>
    </transition>

    <transition name="move">
      <Loader v-show="isLoading"/>
    </transition>

    <section class="section" v-show="!isLoading">
      <nav class="nav">
        <div class="container">
          <input 
            class="input is-large" 
            type="text" 
            placeholder="Buscar canciones" 
            v-model="searchQuery"
            @keyup.enter="search"
          >
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
        <div class="columns is-multiline">
          <div class="column is-one-quarter" :key="t.id" v-for="t in tracks">
            <Track
              v-blur="t.preview_url"
              :class="{ 'is-active': t.id == selectedTrack }"
              :track="t" 
              @select="setSelectedTrack"
            />
          </div>
        </div>
      </div>
    </section>

  
  </main>
</template>

<script>
import trackService from '@/services/track'

import Track from '@/components/Track.vue'

import Notification from '@/components/shared/Notification.vue'
import Loader from '@/components/shared/Loader.vue'

export default {
  name: 'app',

  components: { Track, Loader, Notification },

  data () {
    return {
      searchQuery: '',
      tracks: [],

      isLoading: false,
      showNotification: false,

      selectedTrack: ''
    }
  },
  watch: {
    showNotification() {
      if(this.showNotification) {
        setTimeout(() => {
          this.showNotification = false
        }, 3000)
      }
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
      this.isLoading = true
      trackService.search(this.searchQuery)
        .then(res => {
          this.showNotification = res.tracks.total == 0
          this.tracks = res.tracks.items
          this.isLoading = false
        })
    },
    setSelectedTrack(id) {
      this.selectedTrack = id
    }
  }
}
</script>

<style lang="scss">
  .results {
    margin-top: 50px;
  }

  .is-active {
    border: 3px #23d160 solid;
  }
</style>
