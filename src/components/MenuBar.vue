<template>
  <div class="topnav" id="myTopnav">
    <router-link to="/"
      ><span><i class="fas fa-home"></i></span
    ></router-link>
    <a><dropdwn></dropdwn></a>
    <router-link to="/create">Creator</router-link>
    <a href="javascript:void(0);" class="icon" @click="burgerMenu()">
      <i class="fa fa-bars"></i>
    </a>
  </div>
</template>

<script>
import dropdwn from '../components/Dropdown.vue'
export default {
  name: 'MenuBar',
  props: {
    menubar: Object
  },
  data () {
    return {}
  },
  components: {
    dropdwn
  },
  methods: {
    burgerMenu () {
      var topNav = document.getElementById('myTopnav')
      if (topNav.className === 'topnav') {
        topNav.className += ' responsive'
      } else {
        topNav.className = 'topnav'
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.topnav {
  overflow: hidden;
  background-color: #333;
}

.topnav a {
  float: left;
  display: block;
  color: #f2f2f2;
  text-align: center;
  padding: 14px 16px;
  text-decoration: none;
  font-size: 17px;
}

.topnav a:hover {
  background-color: #c0c9d0;
  color: black;
}

.topnav a.active {
  background-color: #04aa6d;
  color: white;
}

.topnav .icon {
  display: none;
}

@media screen and (max-width: 40em) {
  .topnav a:not(:first-child) {
    display: none;
  }
  .topnav a.icon {
    float: right;
    display: block;
  }
}

@media screen and (max-width: 40em) {
  .topnav.responsive {
    position: relative;
  }
  .topnav.responsive .icon {
    position: absolute;
    right: 0;
    top: 0;
  }
  .topnav.responsive a {
    float: none;
    display: block;
    text-align: left;
  }
}
</style>
