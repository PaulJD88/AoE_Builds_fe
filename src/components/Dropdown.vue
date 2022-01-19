<template>
  <div class="dropdown">
    <button class="dropbtn">Civilisations</button>
    <div class="dropdown-content">
      <li><router-link to="/abbasid">The Abbasid Dynasty</router-link></li>
      <li><router-link to="/chinese">The Chinese</router-link></li>
      <li><router-link to="/delhi">The Delhi Sultanate</router-link></li>
      <li><router-link to="/english">The English</router-link></li>
      <li><router-link to="/french">The French</router-link></li>
      <li><router-link to="/romans">The Holy Roman Empire</router-link></li>
      <li><router-link to="/mongols">The Mongols</router-link></li>
      <li><router-link to="/rus">The Rus</router-link></li>
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
  color: white;
  padding: 2px;
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
  min-width: 16px;
  font-family: 'Oldenburg', cursive;
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
  background-color: #183540;
}

</style>
