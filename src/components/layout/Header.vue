<template>
    <section class="hero is-success">
        <div class="hero-head">
            <header class="nav">
                <div class="container">
                    <div class="nav-left">
                        <div class="nav-item">
                            <strong>
                                Music
                            </strong>
                        </div>
                    </div>
                    <div class="nav-right nav-menu">
                        <router-link class="nav-item" :to="{ name: 'search' }">
                            Buscar
                        </router-link>
                        <router-link class="nav-item" to="about">
                            Nosotros
                        </router-link>
                    </div>
                </div>
            </header>
        </div>
        <div class="hero-body">
            <div class="container has-text-centered">
                <h1 class="title">
                    Music
                </h1>
                <h2 class="subtitle">
                    Canciones que están Vue-nisimas!
                </h2>
                <Player />
            </div>
        </div>
    </section>
</template>

<script>
import Player from '@/components/Player.vue'

export default {
    components: { Player }
}
</script>