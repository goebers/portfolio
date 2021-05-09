<template>
  <div class="default-layout">
    <Nuxt class="content-wrapper" />
    <Footer class="footer-wrapper" />
  </div>
</template>

<style lang="scss">
*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
}

.content-wrapper {
  padding: 1.5em 2em;
}

.footer-wrapper {
  background-color: lightgray;
  padding: 1.5em 2em;
}
</style>
