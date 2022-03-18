<template>
  <div class="buildcontainer">
    <div class="buildtile">
      <h3>{{ build.build_name }}</h3>
      <p>{{ build.build_order }}</p>
      <a>{{ build.url }}</a>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CivTile',
  props: {
    build: Object
  },
  data () {
    return {}
  },
  methods: {}
}
</script>

<style scoped lang="scss">
.buildcontainer {
  display: flex;
  justify-content: center;
  padding: 10px;
}

.buildtile {
  display: flex;
  flex-direction: column;
  background: #333;
  box-shadow: 10px 10px 5px rgba(5, 5, 5, 0.253);
  border-radius: 5px;
  width: 50%;
  height: auto;
  margin: 20px 0px 20px 0;
  padding: 10px;
}

p,
a {
  font-size: 15px;
}
</style>
