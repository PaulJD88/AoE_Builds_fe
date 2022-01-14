<template>
  <div>
    <h1>The Chinese</h1>
    <div class="build">
      <div class="builds" v-for="build in showBuilds" :key="build.id">
            <h1>{{ build.name }}</h1>
            <h2>{{ build.subheading }}</h2>
            <p>{{ build.url }}</p>
      </div>
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

<style scoped lang="scss">
</style>
