<template>
  <div class="about">
    <button @click="getBuilds"> Get Builds </button>
    <h1>This is an about page</h1>
  </div>
</template>

<script>
export default {
  methods: {
    getBuilds () {
      console.log('Getting Builds!')
    }
  }
}
</script>

<style>
</style>
