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
.dropdown {
  position: end;
  display: inline-block;
}

.dropdown-content {
  display: none;
  font-family: "Oldenburg", cursive;
  font-family: "Open Sans", sans-serif;
  font-size: 17px;
  z-index: 1;
}

.dropdown-content a {
  color: black;
  padding: 8px 5px;
  text-decoration: none;
  display: block;
  transition: all 1.1s ease;
  -webkit-transition: all 1.1s ease;
}

.dropdown-content a:hover {
  background-color: #052440;
  color: white;
  border-radius: 10px;
}

.dropdown:hover .dropdown-content {
  display: block;
}

.dropdown:hover .dropbtn {
  display: none;
}
</style>
