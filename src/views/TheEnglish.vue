<template>
  <div class="buildcontainer">
    <h1>The English</h1>
    <div class="build" v-for="build in showBuilds" :key="build.id">
      <CivTile :build="build"></CivTile>
    </div>
  </div>
</template>

<script>
import CivTile from '../components/CivTile.vue'
export default {
  data () {
    return {
      showBuilds: []
    }
  },
  components: {
    CivTile
  },
  methods: {
    getBuilds () {
      console.log('Getting Builds!')
      fetch('http://localhost:3000/builds/english', {
        method: 'GET'
      })
        .then((response) => response.json())
        .then((json) => {
          console.log(json)
          this.showBuilds = json
        })
    }
  },
  created: function () {
    this.getBuilds()
  }
}
</script>

<style>
</style>
