<template>
  <div class="buildtile">
    <div class="buildtilecontent">
      <h3>{{ build.build_name }}</h3>
      <div class="image"><img src=https://picsum.photos/360/180><img /></div>
      <div class="insidetext">{{ build.build_order }}</div>
      <div class="rating"><VoteRating></VoteRating></div>
      <div class="link">{{ build.url }}</div>
      <button onclick="window.location.href='build.url'"></button>
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
  flex-wrap: wrap;
  padding: 10px;
}

h3 {
  display: flex;
  padding: 10px;
}

img {
  width: 100%;
  height: auto;
  border-radius: 25px;
  display: flex;
  padding: 10px;
}

.rating {
  width: auto;
}
.insidetext {
  width: auto;
  font-size: 15px;
  color: whitesmoke;
}

.link {
  width: 100%;
  height: auto;
}
</style>
