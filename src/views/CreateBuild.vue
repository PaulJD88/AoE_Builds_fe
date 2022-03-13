<template>
  <div class="form">
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
      activeClass: 'active'
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
    }
  }
}
</script>

<style scoped lang="scss">
form {
  display: inside-flex;
  width: 500px;
  font-size: 25px;
  padding: 15px;
}

textarea {
  display: inside-flex;
  margin: 10px 0px 10px 0px;
  width: 100%;
  box-shadow: 0 10px 10px rgba(0, 0, 0, 0.1);
  height: 300px;
  font-family: "Oldenburg", cursive;
  color: grey;
}

input,
select {
  display: inside-flex;
  margin: 10px 0px 10px 0px;
  width: 100%;
  height: 25px;
  box-shadow: 0 10px 10px rgba(0, 0, 0, 0.1);
  font-family: "Oldenburg", cursive;
}

.icon {
  font-size: 250px;
}

button {
  color: white;
  padding: 16px;
  font-weight: 600;
  text-transform: uppercase;
  background: grey;
  border: none;
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
