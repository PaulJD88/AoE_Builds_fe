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
  font-size: 17px;
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
  display: none;
}
</style>
