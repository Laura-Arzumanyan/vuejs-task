<template>
<!--    <TimeLine/>-->
  <div class="links">
    <a href="#/">Timeline</a> |
    <a href="#/routing">Users</a> |
    <a href="#/non-existent-path">Broken Link</a>
  </div>
  <component :is="currentView"/>
</template>

<script>
import TimeLine from './components/MyComponent.vue'
import RoutingPage from './components/routing/RoutingPage.vue'
import NotFound from './components/routing/NotFound.vue'

const routes = {
  '/': TimeLine,
  '/routing': RoutingPage,
}

export default {
  name: 'App',

  components: {
    // TimeLine,
    // RoutingPage,
  },

  data() {
    return {
      currentPath: window.location.hash,
    }
  },

  computed: {
    currentView() {
      return routes[this.currentPath.slice(1) || '/'] || NotFound
    }
  },

  mounted() {
    window.addEventListener('hashchange', () => {
      this.currentPath = window.location.hash
    })
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

.links {
  margin-bottom: 50px;
}
</style>
