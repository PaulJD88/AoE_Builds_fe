<template>
  <div class="maincontent">
    <link
      rel="stylesheet"
      href="https://use.fontawesome.com/releases/v5.2.0/css/all.css"
      integrity="sha384-hWVjflwFxL6sNzntih27bfxkr27PmbbK/iSvJ+a4+0owXq79v+lsFkW54bOGbiDQ"
      crossorigin="anonymous"
    />
    <menubar></menubar>
    <header>
      <div class="title">
        <h2>Age of Empires IV</h2>
        <h3>Build Guides & Rankings</h3>
      </div>
    </header>
    <div class="headerbreak"></div>
    <div class="mainarticle">
      <router-view />
    </div>
    <div class="footerbreak"></div>
    <footnav></footnav>
  </div>
</template>

<script>
import menubar from '../src/components/MenuBar.vue'
import footnav from '../src/components/FooterNavbar.vue'

export default {
  components: {
    menubar,
    footnav
  }
}
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Oldenburg&family=Open+Sans&display=swap");

body {
  display: flexbox;
  font-family: "Oldenburg", cursive;
  font-family: "Open Sans", sans-serif;
  width: auto;
  padding: 0%;
  margin: 0%;
  background: #c0c9d0;
}

header {
  padding: 5px;
  text-align: center;
  justify-content: center;
  font-size: 35px;
  color: black;
  background: #c0c9d0;
}

.footerbreak, .headerbreak {
  border-bottom: solid 0.1rem black;
  margin-top: 3rem;
  margin-right: 3rem;
  margin-bottom: 2rem;
  margin-left: 3rem;
}
.mainarticle {
  background: #c0c9d0;
  justify-content: center;
  padding: 25px;
}

.buildcontainer {
  display: grid;
  justify-content: center;
  padding: 5rem;
  gap: 1.5rem;
}
/* Refer to individual civilisations */

@media (min-width: 45em) {
  .buildcontainer {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (min-width: 65em) {
  .buildcontainer {
    grid-template-columns: repeat(3, 1fr);
  }
}

@media (min-width: 90em) {
  .buildcontainer {
    grid-template-columns: repeat(4, 1fr);
  }
}

@media only screen and (max-width: 40em) {
  /* For tablets: */
  header,
  .mainarticle,
  footer {
    width: 100%;
    padding: 0;
  }
}
@media only screen and (max-width: 60em) {
  /* For mobile phones: */
  header,
  .container,
  footer {
    width: 100%;
    padding: 0;
  }
}
</style>
