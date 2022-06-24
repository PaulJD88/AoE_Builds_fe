<template>
  <div class="buildtile">
    <div class="buildtilecontent">
      <h3>{{ build.build_name }}</h3>
      <img src=https://picsum.photos/360/360><img />
      <p>{{ build.build_order }}</p>
      <VoteRating></VoteRating>
      {{ build.url }}
      <!-- <button onclick="window.location.href='build.url'"></button>
      <input type="button" @click="window.location.href='build.url';" value="w3docs" /> -->
    </div>
  </div>
</template>

<script>
import VoteRating from '../components/VoteRating.vue'
export default {
  name: 'CivTile',
  props: {
    build: Object
  },
  data () {
    return {}
  },
  components: {
    VoteRating
  }
}
</script>

<style scoped lang="scss">
.buildtile {
  background-color: #333;
  display: flex;
  box-shadow: 10px 10px 5px rgba(5, 5, 5, 0.253);
  border-radius: 5px;
  margin: 10px;
}

.buildtilecontent {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  padding: 10px;
}

h3 {
  display: flex;
  font-size: 2em;
  padding: 10px;
}

img {
  width: 75%;
  height: auto;
  border-radius: 25px;
  padding: 10px;
}
</style>
