<template>
  <div class="buildcontainer">
    <h2>The Mongols</h2>
    <div class="build">
      <div class="builds" v-for="build in showBuilds" :key="build.id">
            <h2>{{ build.name }}</h2>
            <p>{{ build.subheading }}</p>
            <p> {{ build.url }} </p>
            <button> Click Me </button>
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
  display: inline-block;
  background: #183540;
  box-shadow: 10px 10px 5px rgba(5, 5, 5, 0.253);
  border-radius: 10px;
  justify-content: center;
  width: 600px;
  height: auto;
  margin: 20px 20px 20px 0;
  padding: 10px;
}
</style>
