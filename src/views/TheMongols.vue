<template>
  <div>
    <h1>The Mongols</h1>
    <div class="build">
      <button @click="getBuilds">Get Builds</button>
      <div class="builds" v-for="build in showBuilds" :key="build.id"></div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      showBuilds: []
    }
  },
  methods: {
    getBuilds () {
      console.log('Getting Builds!')
      fetch('http://localhost:3000/builds', {
        method: 'GET'
      })
        .then((response) => response.json())
        .then((data) => console.log(data))
        .then((json) => {
          this.showBuilds = json
        })
    }
  }
}
</script>

<style scoped lang="scss">
</style>
