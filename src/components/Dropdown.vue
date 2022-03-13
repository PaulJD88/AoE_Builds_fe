<template>
  <div class="dropdown">
    <a class="dropbtn">Civilisations</a>
    <div class="dropdown-content">
      <router-link to="/abbasid">The Abbasid Dynasty</router-link>
      <router-link to="/chinese">The Chinese</router-link>
      <router-link to="/delhi">The Delhi Sultanate</router-link>
      <router-link to="/english">The English</router-link>
      <router-link to="/french">The French</router-link>
      <router-link to="/romans">The Holy Roman Empire</router-link>
      <router-link to="/mongols">The Mongols</router-link>
      <router-link to="/rus">The Rus</router-link>
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
a.dropbtn {
  color: white;
  padding: 15px, 25px;
  font-size: 16px;
  border: none;
  cursor: pointer;
}

.dropdown {
  position: end;
  display: inline-block;
}

.dropdown-content {
  display: none;
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
