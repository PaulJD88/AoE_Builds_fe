<template>
  <div id="voting">
    <button v-on:click="counter += 1">Add 1</button>
    <button v-on:click="counter -= 1">Subtract 1</button>
    <p>This build has {{ counter }} votes.</p>
  </div>
</template>

<script>
export default {
  name: 'VoteRating',
  data () {
    return {
      counter: 0
    }
  },
  components: {}
}
</script>

<style></style>
