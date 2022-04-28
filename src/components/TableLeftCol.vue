<template>
  <tr>
    <td class="row">
      <div class="column column-left" style="height: 30px"></div>
      <div class="column"></div>
    </td>
  </tr>
</template>

<script>
export default {
  name: 'HeightForStartAndEnd',
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.row {
  display: flex;
  padding: 0;
  width: 100%;
}

.column {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50%;
}

.column-left {
  border-right: 3px solid navy;
}
</style>
