<template>
  <div class="form">
    <h1>Build Creator</h1>
    <div class="form-container">
      <form @submit.prevent="submitForm">
        <div>
          <label for="civname">Civilisation:</label><br />
          <select id="name" type="text" v-model="civName" required>
            <option value="abbassid">The Abbassid Dynasty</option>
            <option value="chinese">The Chinese</option>
            <option value="delhi">The Delhi Sultanate</option>
            <option value="english">The English</option>
            <option value="french">The French</option>
            <option value="roman">The Holy Roman Empire</option>
            <option value="mongols">The Mongols</option>
            <option value="rus">The Rus</option>
          </select>
        </div>
        <div>
          <label for="buildname">Build Name:</label><br />
          <input id="build" type="text" v-model="buildName" required />
        </div>
        <div>
          <label for="buildurl">Build Url:</label><br />
          <input id="url" v-model="buildUrl" required />
        </div>
        <div>
          <label for="buildorder">Build Description:</label><br />
          <textarea id="order" v-model="buildOrder" required></textarea>
        </div>
        <button
          :class="[civName ? activeClass : '']"
          type="submit"
          @click="addBuild"
        >
          Submit <i class="fas fa-arrow-right"></i>
        </button>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      civName: '',
      buildName: '',
      buildUrl: '',
      buildOrder: '',
      response: '',
      activeClass: 'active',
      name: 'Thank you'
    }
  },
  methods: {
    addBuild () {
      fetch('http://localhost:3000/builds', {
        method: 'POST',
        body: JSON.stringify({
          civilisation_name: this.civName,
          build_name: this.buildName,
          build_order: this.buildOrder,
          url: this.buildUrl
        }),
        headers: {
          'Content-type': 'application/json; charset=UTF-8'
        }
      })
        .then(() => {
          console.log('Success')
        })
        .catch((error) => {
          console.log(error)
        })
        .then(alert('Submitted successfully. ' + this.name + '!'))
        .then(
          (this.civName = ''),
          (this.buildName = ''),
          (this.buildOrder = ''),
          (this.buildUrl = '')
        )
    }
  }
}
</script>

<style scoped lang="scss">
.form {
  display: block;
  width: 50%;
}
.form-container {
  background-color: #333;
  color: #c0c9d0;
  display: flex;
  justify-content: justify;
  width: auto;
  height: auto;
  border-radius: 1em;
  font-size: 1.5em;
  margin: 1em;
  padding: 1.5em;
  font-family: "Oldenburg", cursive;
  font-family: "Open Sans", sans-serif;
}

img {
  margin: 1em;
  width: auto;
  height: auto;
}
textarea {
  margin: 10px 0px 10px 0px;
  height: 10em;
  width: auto;
  font-size: 0.5em;
  color: black;
  box-shadow: 0 10px 10px rgba(0, 0, 0, 0.1);
}

input,
select {
  margin: 10px 0px 10px 0px;
  width: auto;
  height: auto;
  font-size: 0.5em;
  box-shadow: 0 10px 10px rgba(0, 0, 0, 0.1);
}

button {
  display: flex;
  justify-content: center;
  color: black;
  padding-bottom: 45em;
  padding-top: 1em;
  text-transform: uppercase;
  font-size: 1em;
  background: #c0c9d0;
  border: none;
  font-family: "Oldenburg", cursive;
  font-family: "Open Sans", sans-serif;
  border-radius: 2px;
  box-shadow: 0px 2px 3px rgba(0, 0, 0, 0.3);
  transition: 0.25s all ease;
  width: 100%;
  cursor: pointer;
  &:hover {
    transform: translateY(2px);
  }
}

i {
  margin-left: 1em;
}

.active {
  background: #0a2126;
  color: white;
  opacity: 0px;
}

@media (min-width: 20em) {
  // .form,
  textarea,
  select,
  input,
  button {
    width: 100%;
    padding: 0;
  }
}

@media only screen and (max-width: 40em) {
  /* For tablets: */
  textarea,
  select,
  input,
  button {
    width: 100%;
    padding: 0;
  }
}
@media only screen and (max-width: 50em) {
  /* For mobile phones: */
  textarea,
  select,
  input,
  button {
    width: 100%;
    padding: 0;
  }
}
</style>
