<template>
  <div class="buildcontainer">
    <div class="buildtile">
      <p>{{ build.build_name }}</p>
      <p>{{ build.build_order }}</p>
      <button>{{ build.url }}</button>
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
  width: 100%;
  padding: 10px;
}

.buildtile {
  display: flex-center;
  flex-direction: column;
  background: #333;
  box-shadow: 10px 10px 5px rgba(5, 5, 5, 0.253);
  border-radius: 5px;
  width: 50%;
  height: auto;
  margin: 20px 0px 20px 0;
  padding: 10px;
}

p {
  font-size: 15px;
}
</style>
