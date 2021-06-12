<template>
  <div class="divider">
    <hr>
  </div>
</template>
<script>
export default {
  name: 'Divider'
}
</script>
<style scoped lang="scss">
.divider hr {
  border: 0;
  height: 1px;
  background-image: linear-gradient(to right, rgba(0, 0, 0, 1), rgba(0, 0, 0, 0.25));
}
</style>
