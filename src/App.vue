<template>
  <div class="maintemplate">
    <link
      rel="stylesheet"
      href="https://use.fontawesome.com/releases/v5.2.0/css/all.css"
      integrity="sha384-hWVjflwFxL6sNzntih27bfxkr27PmbbK/iSvJ+a4+0owXq79v+lsFkW54bOGbiDQ"
      crossorigin="anonymous"
    />
    <header>
      <div class="title">
        <h2>Age of Empires IV</h2>
      </div>
      <div class="subheading">
        <h3>Build Guides & Rankings</h3>
      </div>
      <div class="dropdownlist">
        <menubar></menubar>
        <dropdwn></dropdwn>
      </div>
      <!-- <div class="button-bar">
        <button>
          <router-link to="/abbasid">The Abbasid Dynasty</router-link>
          <span><i class="fas fa-chess-rook"></i></span>
        </button>
        <button>
          <router-link to="/chinese">The Chinese</router-link
          ><span><i class="fas fa-chess-rook"></i></span>
        </button>
        <button>
          <router-link to="/delhi">The Delhi Sultanate</router-link
          ><span><i class="fas fa-chess-rook"></i></span>
        </button>
        <button>
          <router-link to="/english">The English</router-link
          ><span><i class="fas fa-chess-rook"></i></span>
        </button>
        <button>
          <router-link to="/french">The French</router-link
          ><span><i class="fas fa-chess-rook"></i></span>
        </button>
        <button>
          <router-link to="/romans">The Holy Roman Empire</router-link
          ><span><i class="fas fa-chess-rook"></i></span>
        </button>
        <button>
          <router-link to="/mongols">The Mongols</router-link
          ><span><i class="fas fa-chess-rook"></i></span>
        </button>
        <button>
          <router-link to="/rus">The Rus</router-link
          ><span><i class="fas fa-chess-rook"></i></span>
        </button>
      </div> -->
    </header>

    <div class="container">
      <div class="navbar">
        <div class="navcontent">
          <button>
            <router-link to="/"
              ><span><i class="fas fa-home"></i></span
            ></router-link>
          </button>
          <button>
            <router-link to="/create"
              >Creator<span><i class="fas fa-warehouse"></i></span
            ></router-link>
          </button>
        </div>
      </div>
      <div class="mainarticle">
        <div class="maincontent"><router-view /></div>
      </div>
    </div>
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
  </div>
</template>

<script>
import menubar from '../src/components/MenuBar.vue'
import dropdwn from '../src/components/Dropdown.vue'

export default {
  components: {
    dropdwn,
    menubar
  }
}
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Oldenburg&display=swap");

body {
  display: flexbox;
  font-family: "Oldenburg", cursive;
  padding: 0%;
  margin: 0%;
  background: #052440;
}

header {
  display: block;
  background-color: #052440;
  padding: 25px;
  text-align: center;
  justify-content: center;
  font-size: 35px;
  color: white;
}

.container {
  display: flex;
  background: #052440;
  justify-content: flex-start;
  font-size: 25px;
  color: white;
}

.navbar {
  display: inline-flex;
  width: 250px;
  justify-content: center;
}

.navcontent {
  display: inline-flex;
  padding: 25px;
  width: 150px;
  height: 50px;
  text-align: left;
}

.mainarticle {
  display: inline-flex;
  width: auto;
  padding: 25px;
  color: white;
}

.maincontent {
  display: inline-flex;
  padding: 25px;
  color: white;
}

footer {
  display: flex;
  background-color: #c0c9d0;
  padding: 10px;
  justify-content: center;
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

button {
  box-shadow: inset 0px 1px 0px 0px #fce2c1;
  background: linear-gradient(to bottom, #ffc477 5%, #fb9e25 100%);
  background-color: #ffc477;
  border-radius: 6px;
  border: 1px solid #eeb44f;
  display: inline-block;
  cursor: pointer;
  color: #ffffff;
  font-family: Arial;
  font-size: 15px;
  font-weight: bold;
  padding: 6px 24px;
  margin: 2px;
  text-decoration: none;
  text-shadow: 0px 1px 0px #cc9f52;
}
button:hover {
  background: linear-gradient(to bottom, #fb9e25 5%, #ffc477 100%);
  background-color: #fb9e25;
}
button:active {
  position: relative;
  top: 1px;
}

@media only screen and (max-width: 800px) {
  /* For tablets: */
  header,
  .container,
  footer {
    width: 100%;
    padding: 0;
  }
}
@media only screen and (max-width: 500px) {
  /* For mobile phones: */
  footer,
  .container,
  header {
    width: 100%;
    padding: 0;
  }
}
</style>
