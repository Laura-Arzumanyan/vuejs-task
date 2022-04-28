<template>
  <div class="not-found-element">
    <p>Not Found Page</p>
  </div>
</template>

<script>
import moment from 'moment'
// import BluePoint from './BluePoint.vue'

export default {
  name: 'NotFound',
  components: {
  },
  props: {
    // icon: Image,
  },
  created: function () {
    this.moment = moment;
  },

  data() {
    return {

    }
  },

  computed: {

  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
