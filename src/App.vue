<template>
  <div>
    <header>
      <h2>Age of Empires IV</h2>
      <h3>Build Rankings</h3>
    </header>

    <section>
      <nav>
        <ul>
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
      <button v-html="AoESite"></button>
    </footer>
  </div>
</template>

<script>
import dropdwn from '../src/components/Dropdown.vue'
export default {
  data () {
    return {
      AoESite:
        '<a href="https://www.ageofempires.com/"target="_blank">🏰Age of Empires🏰</a>'
    }
  },
  components: {
    dropdwn
  }
}
</script>

<style lang="scss">
* {
  box-sizing: border-box;
}

body {
  font-family: Arial, Helvetica, sans-serif;
  padding: 0%;
  margin: 0%;
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
  background: #2c5159;
  padding: 20px;
  height: 700px;
}

.sidebar {
  float: right;
  width: 10%;
  background: #2c5159;
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
  border: none;
  cursor: pointer;
}

article {
  float: left;
  padding: 20px;
  width: 80%;
  height: 700px;
  background-color: #d9d9d9;
}

section::after {
  content: "";
  display: table;
  clear: both;
}

footer {
  background-color: #183540;
  padding: 10px;
  text-align: center;
  color: white;
}

@media (max-width: 600px) {
  nav,
  article,
  .sidebar
  {
    width: 100%;
    height: auto;
  }
}
</style>
