<template>
  <div class="form">
          <h1> Build Creator </h1>
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
        Submit
      </button>
    </form>
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
form {
  background-color: #333;
  display: inside-flex;
  width: 500px;
  font-size: 25px;
  margin: 50px;
  padding: 15px;
  font-family: "Oldenburg", cursive;
  font-family: "Open Sans", sans-serif;
}

textarea {
  display: inside-flex;
  margin: 10px 0px 10px 0px;
  width: 100%;
  box-shadow: 0 10px 10px rgba(0, 0, 0, 0.1);
  height: 200px;
  font-size: 20px;
  color: black;
}

input,
select {
  display: inside-flex;
  margin: 10px 0px 10px 0px;
  width: 50%;
  height: 25px;
  font-size: 18px;
  box-shadow: 0 10px 10px rgba(0, 0, 0, 0.1);
}

.icon {
  font-size: 250px;
}

button {
  color: black;
  padding: 16px;
  text-transform: uppercase;
  font-size: 25px;
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

.active {
  background: #0a2126;
  color: white;
  opacity: 0px;
}

@media only screen and (max-width: 800px) {
  /* For tablets: */
  form,
  textarea,
  input,
  button {
    width: 100%;
    padding: 0;
  }
}
@media only screen and (max-width: 500px) {
  /* For mobile phones: */
  form,
  textarea,
  input,
  button {
    width: 100%;
    padding: 0;
  }
}
</style>
