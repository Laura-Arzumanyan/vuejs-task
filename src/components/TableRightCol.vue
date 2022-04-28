<template>
  <div class="column column-left"></div>
  <div class="column">
    <PointsRight/>
    <div class="element-right">
      <div class="dates">
        {{ moment(date).format('LL') }}
      </div>
      <div>
        {{ firstName + ' ' + lastName }}
      </div>
    </div>
  </div>
</template>

<script>
import PointsRight from './PointsRight.vue'
import moment from "moment";

export default {
  components: {
    PointsRight,
  },

  name: 'TableRightCol',

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

.element-right {
  width: 80%;
  padding-right: 50%;
}

.dates {
  color: navy;
  font-size: 17px;
  font-weight: bold;
  padding-bottom: 3px;
}
</style>
