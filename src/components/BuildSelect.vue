<template>
  <div class="build">
    <button @click="getBuilds">Get Builds</button>
  </div>
</template>

<script>
export default {
  name: 'BuildSelect',
  props: {
    buildslct: Object
  },
  data () {
    return {
      showBuild: []
    }
  },
  methods: {
    getBuilds () {
      console.log('Getting Builds!')
      fetch('http://localhost:3000/builds')
        .then((response) => response.json())
        .then((data) => console.log(data))
    }
  }
}
</script>

<style>
button {
  background-color: #183540;
  color: white;
  padding: 16px;
  font-size: 16px;
  border: none;
  cursor: pointer;
}
</style>
