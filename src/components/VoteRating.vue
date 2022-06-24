<template>
  <div class="voting">
    <button v-on:click="counter += 1">
      <i class="far fa-thumbs-up"></i>
    </button>
    <p>This build has {{ counter }} votes.</p>
    <button v-on:click="counter -= 1">
      <i class="far fa-thumbs-down"></i>
    </button>
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

<style>
.voting {
  display: flex;
}
button {
  width: 100px;
  height: 70px;
}

p {
  color: white;
  padding: 10px;
}
</style>
