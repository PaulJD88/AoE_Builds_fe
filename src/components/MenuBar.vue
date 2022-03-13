<template>
  <div class="topnav" id="myTopnav">
    <router-link to="/"
      ><span><i class="fas fa-home"></i></span
    ></router-link>
    <a><dropdwn></dropdwn></a>
    <router-link to="/create">Creator</router-link>
    <a href="javascript:void(0);" class="icon" @click="myFunction()">
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
    myFunction () {
      var x = document.getElementById('myTopnav')
      if (x.className === 'topnav') {
        x.className += ' responsive'
      } else {
        x.className = 'topnav'
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
  background-color: #ddd;
  color: black;
}

.topnav a.active {
  background-color: #04aa6d;
  color: white;
}

.topnav .icon {
  display: none;
}

@media screen and (max-width: 600px) {
  .topnav a:not(:first-child) {
    display: none;
  }
  .topnav a.icon {
    float: right;
    display: block;
  }
}

@media screen and (max-width: 600px) {
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
