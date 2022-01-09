<template>
      <div class="form">
    <form @submit.prevent="submitForm">
      <div>
        <label for="civname">Civilisation name:</label><br />
        <input id="name" type="text" v-model="civName" required />
      </div>
      <div>
        <label for="buildname">Build name:</label><br />
        <input id="build" type="text" v-model="buildName" required />
      </div>
      <div>
        <label for="caps">Build order:</label><br />
        <textarea id="caps" v-model="buildOrder" required></textarea>
      </div>
      <button :class="[civName ? activeClass : '']" type="submit">Submit</button>
    </form>
    </div>
</template>

<script>
export default {
  data () {
    return {
      civName: '',
      buildName: '',
      buildOrder: 'Queue up 6 villagers....',
      response: '',
      activeClass: 'active'
    }
  }
}
</script>

<style scoped lang="scss">

form {
  width: 50%;
  font-size: 25px;
  padding: 15px;
}

textarea {
  margin: 10px;
  width: 100%;
  height: 150px;
}

input {
  height: 25px;
  width: 225px;
  margin: 8px;
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
  box-shadow: 0px 2px 3px rgba(0, 0, 0, 0.3);
  transition: 0.25s all ease;
  width: 50%;
  cursor: pointer;
  &:hover {
    transform: translateY(2px);
  }
}

.active {
  background: #0a2126;
  opacity: 0px;
}

@media (max-width: 600px) {
  form
  {
    width: 100%;
    height: auto;
  }
}
</style>
