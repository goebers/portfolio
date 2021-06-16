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

  @include themed() {
    background-image: t('divider-bg-color');
  }
}
</style>
