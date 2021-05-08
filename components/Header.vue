<template>
  <div class="header-wrapper">
    <div class="picture">
      picture
    </div>
    <div class="desc">
      desc
    </div>
  </div>
</template>
<script>
export default {
  name: 'Header'
}
</script>
<style lang="scss">
.header-wrapper {
  display: flex;
  flex-direction: column;
}

.picture,
.desc {
  flex: 1 0 100%;
}

@media only screen and (min-width: $breakpoint-tablet) {
  .header-wrapper {
    flex-direction: row;
  }

  .picture,
  .desc {
    flex: 1 0 50%;
  }
}
</style>
