<template>
  <div class="dropdown">
    <button class="dropbtn">Civilisations</button>
    <div class="dropdown-content">
      <a href="#">The Abbasid Dynasty</a>
      <a href="#">The Chinese</a>
      <a href="#">The Delhi Sultanate</a>
      <a href="#">The English</a>
      <a href="#">The French</a>
      <a href="#">The Holy Roman Empire</a>
      <a href="#">The Mongols</a>
      <a href="#">The Rus</a>
    </div>
  </div>
</template>

<script>
export default {
  name: 'DropDown',
  props: {
    dropdwn: Object
  },
  data () {
    return {}
  },
  methods: {}
}
</script>

<style scoped lang="scss">
.dropbtn {
  background-color: #4caf50;
  color: white;
  padding: 16px;
  font-size: 16px;
  border: none;
  cursor: pointer;
}

.dropdown {
  position: relative;
  display: inline-block;
}

.dropdown-content {
  display: none;
  position: absolute;
  background-color: #f9f9f9;
  min-width: 160px;
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
  z-index: 1;
}

.dropdown-content a {
  color: black;
  padding: 12px 16px;
  text-decoration: none;
  display: block;
}

.dropdown-content a:hover {
  background-color: #f1f1f1;
}

.dropdown:hover .dropdown-content {
  display: block;
}

.dropdown:hover .dropbtn {
  background-color: #3e8e41;
}

</style>
