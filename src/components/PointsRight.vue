<template>
  <div class="points-container" style="">
    <div class="white-point"></div>
    <div class="line"></div>
    <div class="blue-point"></div>
  </div>
</template>

<script>
export default {
  name: 'PointsRight',
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.points-container {
  width: 20%;
  display: flex;
  justify-content: start;
  position: relative;
  right: 10px;
}

.blue-point {
  border: 3px solid navy;
  background-color: navy;
  border-radius: 50%;
  width: 12px;
  height: 12px;
}
.white-point {
  border: 3px solid navy;
  background-color: white;
  border-radius: 50%;
  width: 12px;
  height: 12px;
}

.line {
  border: 2px solid navy;
  width: 70%;
  height: 0;
  align-self: center;
}
</style>
