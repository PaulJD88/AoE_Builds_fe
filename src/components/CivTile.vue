<template>
  <div class="buildcontainer">
    <div class="buildtile">
      <h3>{{ build.build_name }}</h3>
      <div class="image"><img src=https://picsum.photos/360/180><img /></div>
      <div class="rating"><VueStar></VueStar></div>
      <div class="insidetext">{{ build.build_order }}</div>
      <div class="link">{{ build.url }}</div>
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
.buildcontainer {
  border: dashed green;
  display: flex;
}

.buildtile {
  display: flex;
  background: #333;
  border: dashed blue;
  box-shadow: 10px 10px 5px rgba(5, 5, 5, 0.253);
  border-radius: 5px;
  margin: 20px 0px 20px 0;
  padding: 10px;
}

h3 {
  border:dashed yellow;
}

.image {
  border: dashed purple;
  float: left;
}

.rating {
  border: dashed brown;
}
.insidetext {
  border: dashed black;
  float: right;
  font-size: 10px;
}

.link {
 border: dashed white;
}
</style>
