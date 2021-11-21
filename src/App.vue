<template>
  <div>
    <header>
      <h2>Age of Empires IV</h2>
    </header>

    <section>
      <nav>
        <ul>
          <li><a href="#">Home</a></li>
          <li><a href="#">Create Build</a></li>
          <dropdwn>Civilastions</dropdwn>
        </ul>
      </nav>

      <article>
          <h1>Welcome</h1>
          <p>
            This is a repository for Age of Empires IV players to find the highest rated builds for the civilisations found in the game.
          </p>
          <p>
            As well as find links to rated builds you can also create your own build through the provided template.
          </p>
        <div class="about">
          <button @click="getBuilds">Get Builds</button>
        </div>
      </article>
    </section>

    <footer>
      <p>The End</p>
    </footer>
  </div>
</template>

<script>
import dropdwn from '../src/components/Dropdown.vue'

export default {
  components: {
    dropdwn
  },
  methods: {
    getBuilds () {
      console.log('Getting Builds!')
      fetch('http://localhost:3000/builds')
        .then((response) => response.json())
        .then((data) => console.log(data))
    }
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
  background-color: #666;
  padding: 30px;
  text-align: center;
  font-size: 35px;
  color: white;
}

nav {
  float: left;
  width: 15%;
  background: #ccc;
  padding: 20px;
  height: 535px;
}

nav ul {
  list-style-type: none;
  padding: 0;
}

article {
  float: left;
  padding: 20px;
  width: 85%;
  height: 530px;
  background-color: #f1f1f1;
}

section::after {
  content: "";
  display: table;
  clear: both;
}

footer {
  background-color: #777;
  padding: 10px;
  text-align: center;
  color: white;
}

@media (max-width: 600px) {
  nav,
  article {
    width: 100%;
    height: auto;
  }
}
</style>
