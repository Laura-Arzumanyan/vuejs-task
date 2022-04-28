<template>
  <tr>
    <div class="blue-point"></div>
  </tr>
</template>

<script>
export default {
  name: 'BluePoint',
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
tr {
  display: flex;
  justify-content: center;
}

.blue-point {
  border: 2px solid navy;
  background-color: navy;
  border-radius: 50%;
  width: 12px;
  height: 12px;
}
</style>
