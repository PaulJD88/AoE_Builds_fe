<template>
  <div class="buildtile">
    <div class="buildtilecontent">
      <h3>{{ build.build_name }}</h3>
      <img src=https://picsum.photos/360/360><img />
      <p>{{ build.build_order }}</p>
      <VoteRating></VoteRating>
      <button @click="gotoBuildUrl()"> Click for more <i class="fas fa-arrow-right"></i> </button>
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
  },
  methods: {
    gotoBuildUrl () {
      window.open(this.build.url, '_blank').focus()
    }
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

button {
  display: flex;
  justify-content: center;
  color: black;
  padding-bottom: 2em;
  padding-top: 1em;
  text-transform: uppercase;
  font-size: 1em;
  background: #c0c9d0;
  border: none;
  font-family: "Oldenburg", cursive;
  font-family: "Open Sans", sans-serif;
  border-radius: 2px;
  box-shadow: 0px 2px 3px rgba(0, 0, 0, 0.3);
  transition: 0.25s all ease;
  width: 100%;
  cursor: pointer;
  &:hover {
    transform: translateX(2px);
  }
}

i {
  margin-left: 1em;
}

img {
  width: 75%;
  height: auto;
  border-radius: 25px;
  padding: 10px;
}
</style>
