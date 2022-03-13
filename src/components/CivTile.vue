<template>
  <div class="buildcontainer">
    <div class="build">
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
  display: inside-flex;
  padding: 10px;
}

.build {
  display: inside-flex;
  flex-direction: column;
  background: #575F61;
  box-shadow: 10px 10px 5px rgba(5, 5, 5, 0.253);
  border-radius: 5px;
  justify-content: center;
  width: auto;
  height: auto;
  margin: 20px 0px 20px 0;
  padding: 10px;
}
</style>
