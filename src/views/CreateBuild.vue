<template>
      <div class="form">
    <form @submit.prevent="submitForm">
      <div>
        <label for="civname">Civilisation name:</label><br />
        <input id="name" type="text" v-model="civname" required />
      </div>
      <div>
        <label for="buildname">Build name:</label><br />
        <input id="build" type="text" v-model="buildname" required />
      </div>
      <div>
        <label for="caps">Let us know how the site can be improved below:</label><br />
        <textarea id="caps" v-model="caps" required></textarea>
      </div>
      <button :class="[civname ? activeClass : '']" type="submit">Submit</button>
    </form>
    </div>
</template>

<script>
export default {
  data () {
    return {
      civname: '',
      buildname: '',
      caps: '',
      response: '',
      activeClass: 'active'
    }
  }
}
</script>

<style>

form {
  font-size: 25px;
  padding: 15px;
}

textarea {
  margin: 10px;
  width: 250px;
}

input {
  height: 25px;
  width: 225px;
  margin: 8px;
}

.icon {
  font-size: 250px;
}

</style>
