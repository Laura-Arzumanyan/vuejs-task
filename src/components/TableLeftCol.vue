<template>
  <div class="column column-left">
    <div class="element-left">
      <div class="dates">
        {{ moment(date).format('LL') }}
      </div>
      <div>
        {{ firstName + ' ' + lastName }}
      </div>
    </div>
    <PointsLeft/>
  </div>
  <div class="column"></div>
</template>

<script>
import PointsLeft from './PointsLeft.vue'
import moment from "moment";

export default {
  components: {
    PointsLeft,
  },

  name: 'TableLeftCol',

  props: {
    firstName: String,
    lastName: String,
    date: String,
  },

  created: function () {
    this.moment = moment;
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.column {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50%;
}

.column-left {
  border-right: 3px solid navy;
}

.element-left {
  width: 80%;
  padding-left: 50%;
}

.dates {
  color: navy;
  font-size: 17px;
  font-weight: bold;
  padding-bottom: 3px;
}
</style>
