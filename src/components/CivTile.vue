<template>
  <div class="buildcontainer">
    <div class="buildtile">
      <h3>{{ build.build_name }}</h3>
      <div><VueStar></VueStar></div>
      <div class="hoverme">Hover over me</div>
      <div class="hide">
        <div class="insidetext">{{ build.build_order }}</div>
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
.buildcontainer {
  display: flex;
}

.buildtile,
.buildinfo {
  display: flex;
  flex-direction: column;
  background: #333;
  box-shadow: 10px 10px 5px rgba(5, 5, 5, 0.253);
  border-radius: 5px;
  width: auto;
  height: auto;
  margin: 20px 0px 20px 0;
  padding: 10px;
}

.insidetext {
  width: 50%;
}

.link {
  width: 20%;
}

.hide {
  display: none;
}

.hoverme:hover + .hide {
  display: flex;
  color: white;
}

.hoverme {
  padding: 2px;
  cursor: pointer;
}
</style>
