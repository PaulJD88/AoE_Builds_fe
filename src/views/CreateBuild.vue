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
        <label for="buildurl">Build Url:</label><br />
        <input id="url" v-model="buildUrl" required />
      </div>
      <div>
        <label for="buildorder">Build order:</label><br />
        <textarea id="order" v-model="buildOrder" required></textarea>
      </div>
      <button :class="[civName ? activeClass : '']" type="submit">
        Submit
      </button>
      <button @click="addBuild">Add Build</button>
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
      buildOrder:
        'EXAMPLE: \n- Queue up 6 villagers \n- All initial Villagers to the starting sheep \n- Send your scout out (micro it to gather Sheep and find the enemy Town Center) \n- 1 Villager on Gold \n- 1 Villager on House, then Gold \n- Queue up 2 more villagers and send them to Wood \n- 8 Villagers on Sheep \n- 1 Villager on Lumbercamp, then Wood \n- 1 Villager on Wood \n- At 100 gold, send your mining villagers to walk towards to center of the map \n- Build a landmark with the villagers that were mining \n- Queue up 1 more villager, send them to Wood \n- Queue up 1 more villager, send them to Sheep \n- Send 2 Villagers that were on Sheep to the Landmark \n- Send 1 Villager that was on Wood to the Landmark \n- Once the Landmark is ready, send those 4 Villagers to make a Mill at a nearby Food (Deer if possible) \n- Queue 2 Longbowmen and send them to the enemy base (harass their mines, mills, and Lumbercamps) \n- Keep training Longbowmen and harassing the enemy while improving your economy',
      response: '',
      activeClass: 'active'
    }
  },
  methods: {
    addBuild () {
      fetch('http://localhost:3000/builds', {
        method: 'POST',
        body: JSON.stringify({
          name: this.civName,
          subheading: this.buildName,
          url: this.buildUrl,
          order: this.buildOrder
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
  width: 100%;
  font-size: 25px;
  padding: 15px;
}

textarea {
  margin: 10px;
  width: 450px;
  box-shadow: 0 10px 10px rgba(0, 0, 0, 0.1);
  height: 500px;
  font-family: "Oldenburg", cursive;
  color: grey;
}

input {
  height: 30px;
  width: 250px;
  margin: 10px;
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
  form {
    width: 100%;
    height: auto;
  }
}
</style>
