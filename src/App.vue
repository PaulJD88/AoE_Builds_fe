<template>
  <div>
    <header>
      <h2>Age of Empires IV</h2>
      <h3>Build Rankings</h3>
    </header>

    <section>
      <nav>
        <ul>
          <button><router-link to="/cover">Home</router-link></button>
          <button><router-link to="/create">Create Build</router-link></button>
        </ul>
      </nav>

      <article>
        <h1>Welcome</h1>
        <p>
          This is a repository for Age of Empires IV players to find the highest
          rated builds for the civilisations found in the game.
        </p>
        <p>
          As well as find links to rated builds you can also create your own
          build through the provided template.
        </p>
        <buildslct></buildslct>
      </article>

      <div class="sidebar"></div>
    </section>

    <footer>
      <button v-html="AoESite"></button>
    </footer>
  </div>
</template>

<script>
import buildslct from '../src/components/BuildSelect.vue'

export default {
  data () {
    return {
      AoESite:
        '<a href="https://www.ageofempires.com/"target="_blank">🏰Age of Empires🏰</a>'
    }
  },
  components: {
    buildslct
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
  background-color: #0a2126;
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
  article, .sidebar {
    width: 100%;
    height: auto;
  }
}
</style>
