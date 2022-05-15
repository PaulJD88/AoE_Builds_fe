<template>
  <div class="buildcontainer">
    <div class="buildtile">
      <h3>{{ build.build_name }}</h3>
      <div class="buildtilecontent">
        <div class="image"><img src=https://picsum.photos/640/360><img /></div>
        <div class="insidetext">{{ build.build_order }}</div>
        <div class="rating"><VueStar></VueStar></div>
        <div class="link">{{ build.url }}</div>
      </div>
    </div>
  </div>
</template>

<script>
import VueStar from '../components/StarRating.vue'
export default {
  name: 'CivTile',
  props: {
    build: Object
  },
  data () {
    return {}
  },
  components: {
    VueStar
  },
  methods: {}
}
</script>

<style scoped lang="scss">
// .buildcontainer {
//   // display: flex;
//   // flex-wrap: wrap;
// }

.buildtile {
  background-color: #333;
  // border: dashed blue;
  box-shadow: 10px 10px 5px rgba(5, 5, 5, 0.253);
  border-radius: 5px;
  margin: 10px;
}

.buildtilecontent {
  display: flex;
  width: 360px;
  flex-wrap: wrap;
  padding: 10px;
  // border: dashed blue;
}

h3 {
  display: flex;
  padding: 10px;
    // border: dashed yellow;
}

img {
  width: 100%;
  max-width: 400px;
  height: auto;
  border-radius: 25px;
  display: flex;
}

.rating {
  width: auto;
  // border: dashed brown;
}
.insidetext {
  // border: dashed black;
  width: auto;
  font-size: 15px;
  color: whitesmoke;
}

.link {
  width: 100%;
  height: auto;
  // border: dashed white;
}
</style>
