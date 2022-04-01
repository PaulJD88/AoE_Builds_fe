<template>
  <div class="home">
    <div>
      <h2>Welcome</h2>
      <p>
        This is a repository for Age of Empires IV players to find the highest
        rated builds for the civilisations found in the game.
      </p>
      <p>
        As well as find links to rated builds you can also create your own build
        through the provided template.
      </p>
    </div>
    <div>
      <h3>Top Rankings</h3>
    </div>
    <div id="example-1">
      <button v-on:click="counter += 1">Add 1</button>
      <p>The button above has been clicked {{ counter }} times.</p>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      counter: 0
    }
  }
}
</script>
<style scoped lang="scss">
.home {
  height: 450px;
}
</style>
