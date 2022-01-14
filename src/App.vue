<template>
  <div>
        <link rel="stylesheet"
        href="https://use.fontawesome.com/releases/v5.2.0/css/all.css"
        integrity="sha384-hWVjflwFxL6sNzntih27bfxkr27PmbbK/iSvJ+a4+0owXq79v+lsFkW54bOGbiDQ"
        crossorigin="anonymous">
    <header>
      <h2>Age of Empires IV</h2>
      <h3>Build Rankings</h3>
    </header>

    <section>
      <nav>
        <ul class="corner-button">
          <button><router-link to="/">Home</router-link></button>
          <button><router-link to="/create">Create Build</router-link></button>
          <button>
            <dropdwn></dropdwn>
          </button>
        </ul>
      </nav>

      <article>
        <router-view />
      </article>

      <div class="sidebar">
        <h2>Top Builds</h2>
      </div>
    </section>

    <footer>
      <div class="wrapper">
        <div class="icon AoESite">
          <div class="tooltip" v-html="AoESite">Age of Empires</div>
          <span><i class="fab fa-fort-awesome"/></span>
        </div>
        <div class="icon facebook">
          <div class="tooltip" v-html="Facebook">Facebook</div>
          <span><i class="fab fa-facebook-f"></i></span>
        </div>
        <div class="icon twitter">
          <div class="tooltip" v-html="Twitter">Twitter</div>
          <span><i class="fab fa-twitter"></i></span>
        </div>
        <div class="icon instagram">
          <div class="tooltip" v-html="Instagram">Instagram</div>
          <span><i class="fab fa-instagram"></i></span>
        </div>
        <div class="icon youtube">
          <div class="tooltip" v-html="Youtube">Youtube</div>
          <span><i class="fab fa-youtube"></i></span>
        </div>
        <div class="icon github">
          <div class="tooltip" v-html="GitHub">My Github</div>
          <span><i class="fab fa-github"></i></span>
        </div>
      </div>
    </footer>
  </div>
</template>

<script>
import dropdwn from '../src/components/Dropdown.vue'
export default {
  data () {
    return {
      AoESite:
        '<a href="https://www.ageofempires.com/"target="_blank">Age of Empires</a>',
      Facebook:
        '<a href="https://www.facebook.com/ageofempires"target="_blank">Facebook</a>',
      Twitter: '<a href="https://twitter.com/AgeOfEmpires/"target="_blank">Twitter</a>',
      Instagram:
        '<a href="https://www.instagram.com/ageofempiresgame/"target="_blank">Instagram</a>',
      Youtube: '<a href="https://www.youtube.com/user/officialageofempires"target="_blank">Youtube</a>',
      GitHub: '<a href="https://github.com/PaulJD88"target="_blank">GitHub</a>'
    }
  },
  components: {
    dropdwn
  }
}
</script>

<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Oldenburg&display=swap");

* {
  box-sizing: border-box;
}

body {
  font-family: "Oldenburg", cursive;
  padding: 0%;
  margin: 0%;
  place-items: center;
  background: linear-gradient(90deg, #2c5159, #d7e1ec);
}

header {
  background-color: #183540;
  padding: 25px;
  text-align: center;
  font-size: 35px;
  color: white;
}

nav {
  float: left;
  width: 10%;
  padding: 20px;
  height: 700px;
}

.sidebar {
  float: right;
  width: 10%;
  padding: 20px;
  height: 700px;
}

nav ul {
  list-style-type: none;
  padding: 0;
}

button {
  background-color: #183540;
  color: white;
  padding: 16px;
  font-size: 16px;
  font-family: "Oldenburg", cursive;
  border: none;
  cursor: pointer;
}

article {
  float: left;
  padding: 20px;
  width: 80%;
  height: 700px;
  background-color: #d9d9d9;
  border: 20px black;
}

section::after {
  content: "";
  display: table;
  clear: both;
}

footer {
  display: grid;
  height: 100%;
  width: 100%;
  padding-bottom: 10px;
  place-items: center;
  background: linear-gradient(90deg, #2c5159, #d7e1ec);
}

*:focus,
*:active {
  outline: none !important;
  -webkit-tap-highlight-color: transparent;
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
  width: 50px;
  height: 50px;
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
  font-size: 14px;
  background-color: #ffffff;
  color: #ffffff;
  padding: 5px 8px;
  border-radius: 5px;
  box-shadow: 0 10px 10px rgba(0, 0, 0, 0.1);
  opacity: 0;
  pointer-events: none;
  transition: all 0.3s cubic-bezier(0.68, -0.55, 0.265, 1.55);
}

.wrapper .tooltip::before {
  position: absolute;
  content: '';
  height: 8px;
  width: 8px;
  background-color: #ffffff;
  bottom: -3px;
  left: 50%;
  transform: translate(-50%) rotate(45deg);
  transition: all 0.3s cubic-bezier(0.68, -0.55, 0.265, 1.55);
}

.wrapper .icon:hover .tooltip {
  top: -45px;
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

@media (max-width: 600px) {
  nav,
  article,
  .sidebar {
    width: 100%;
    height: auto;
  }
}
</style>
