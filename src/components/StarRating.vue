vue.
<template>
  <div id="app">
    <AwesomeVueStarRating
      :star="this.star"
      :disabled="this.disabled"
      :maxstars="this.maxstars"
      :starsize="this.starsize"
      :hasresults="this.hasresults"
      :hasdescription="this.hasdescription"
      :ratingdescription="this.ratingdescription"
    />
  </div>
</template>

<script>
import AwesomeVueStarRating from 'awesome-vue-star-rating'

export default {
  name: 'VueStar',
  data () {
    return {
      star: 5, // default star
      ratingdescription: [
        {
          text: 'Poor',
          class: 'star-poor'
        },
        {
          text: 'Below Average',
          class: 'star-belowAverage'
        },
        {
          text: 'Average',
          class: 'star-average'
        },
        {
          text: 'Good',
          class: 'star-good'
        },
        {
          text: 'Excellent',
          class: 'star-excellent'
        }
      ],
      hasresults: true,
      hasdescription: true,
      starsize: '2x', // [xs,lg,1x,2x,3x,4x,5x,6x,7x,8x,9x,10x],
      maxstars: 5,
      disabled: false
    }
  },
  components: {
    AwesomeVueStarRating
  }
}
</script>

<style></style>
