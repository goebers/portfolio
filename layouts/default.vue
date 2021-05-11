<template>
  <div class="default-layout">
    <Nuxt />
    <Footer class="footer-wrapper" />
  </div>
</template>

<style lang="scss">
*,
*::before,
*::after,
body {
  box-sizing: border-box;
  margin: 0;
}

.default-layout {
  background-color: $background-color;
}

.footer-wrapper {
  background-color: $footer-background-color;
}
</style>
