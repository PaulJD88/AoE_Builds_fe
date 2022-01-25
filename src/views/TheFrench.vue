<template>
  <div class="buildcontainer">
    <h2>The French</h2>
    <div class="build">
      <div class="builds" v-for="build in showBuilds" :key="build.id">
            <h2>{{ build.name }}</h2>
            <h3>{{ build.subheading }}</h3>
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
.buildcontainer {
  display: block;
  padding: 10px;
}

.builds {
  display: block;
  justify-content: left;
  width: 600px;
  height: auto;
  margin: 5px;
}
</style>
