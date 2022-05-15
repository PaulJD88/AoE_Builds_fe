<template>
  <footer>
    <div class="wrapper">
      <div class="icon AoESite">
        <router-link class="tooltip" to="/aoe">Age of Empires</router-link>
        <span><i class="fab fa-fort-awesome" /></span>
      </div>
      <div class="icon facebook">
        <router-link class="tooltip" to="/facebook">Facebook</router-link>
        <span><i class="fab fa-facebook-f"></i></span>
      </div>
      <div class="icon twitter">
        <router-link class="tooltip" to="/twitter">Twitter</router-link>
        <span><i class="fab fa-twitter"></i></span>
      </div>
      <div class="icon instagram">
        <router-link class="tooltip" to="/instagram">Instagram</router-link>
        <span><i class="fab fa-instagram"></i></span>
      </div>
      <div class="icon youtube">
        <router-link class="tooltip" to="/youtube">Youtube</router-link>
        <span><i class="fab fa-youtube"></i></span>
      </div>
      <div class="icon github">
        <router-link class="tooltip" to="/github">Github</router-link>
        <span><i class="fab fa-github"></i></span>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'Footer',
  props: {
    footnav: Object
  },
  data () {
    return {}
  }
}
</script>

<style>
footer {
  display: flex;
  background: #c0c9d0;
  padding: 10px;
  justify-content: right;
  text-align: center;
  font-size: 35px;
}

.wrapper {
  display: inline-flex;
}

.wrapper .icon {
  position: relative;
  background-color: #ffffff;
  border-radius: 50%;
  padding: 15px;
  margin: 10px;
  width: 30px;
  height: 30px;
  font-size: 18px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  box-shadow: 0 10px 10px rgba(0, 0, 0, 0.1);
  cursor: pointer;
  transition: all 0.2s cubic-bezier(0.68, -0.55, 0.265, 1.55);
}

.wrapper .tooltip {
  position: absolute;
  top: 0;
  font-size: 15px;
  background-color: #ffffff;
  color: #ffffff;
  padding: 10px 8px;
  border-radius: 5px;
  box-shadow: 0 10px 10px rgba(0, 0, 0, 0.1);
  opacity: 0;
  pointer-events: none;
  transition: all 0.3s cubic-bezier(0.68, -0.55, 0.265, 1.55);
}

.wrapper .tooltip::before {
  position: absolute;
  content: "";
  height: 8px;
  width: 8px;
  background-color: #ffffff;
  bottom: -3px;
  left: 50%;
  transform: translate(-50%) rotate(45deg);
  transition: all 0.3s cubic-bezier(0.68, -0.55, 0.265, 1.55);
}

.wrapper .icon:hover .tooltip {
  top: -35px;
  opacity: 1;
  visibility: visible;
  pointer-events: auto;
}

.wrapper .icon:hover span,
.wrapper .icon:hover .tooltip {
  text-shadow: 0px -1px 0px rgba(0, 0, 0, 0.1);
}

.wrapper .AoESite:hover,
.wrapper .AoESite:hover .tooltip,
.wrapper .AoESite:hover .tooltip::before {
  background-color: rgb(153, 133, 22);
  color: #ffffff;
}

.wrapper .facebook:hover,
.wrapper .facebook:hover .tooltip,
.wrapper .facebook:hover .tooltip::before {
  background-color: #3b5999;
  color: #ffffff;
}

.wrapper .twitter:hover,
.wrapper .twitter:hover .tooltip,
.wrapper .twitter:hover .tooltip::before {
  background-color: #46c1f6;
  color: #ffffff;
}

.wrapper .instagram:hover,
.wrapper .instagram:hover .tooltip,
.wrapper .instagram:hover .tooltip::before {
  background-color: #e1306c;
  color: #ffffff;
}

.wrapper .github:hover,
.wrapper .github:hover .tooltip,
.wrapper .github:hover .tooltip::before {
  background-color: #333333;
  color: #ffffff;
}

.wrapper .youtube:hover,
.wrapper .youtube:hover .tooltip,
.wrapper .youtube:hover .tooltip::before {
  background-color: #de463b;
  color: #ffffff;
}
</style>
