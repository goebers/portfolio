<template>
  <div class="default-layout">
    <Nuxt class="content-wrapper" />
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

.content-wrapper {
  padding: 1.5em 2em;
}

.footer-wrapper {
  background-color: $footer-background-color;
  padding: 1.5em 2em;
}

@media only screen and (min-width: $breakpoint-large-mobile) {
  .content-wrapper,
  .footer-wrapper {
    padding: 2em 3em;
  }
}

@media only screen and (min-width: $breakpoint-small-desktop) {
  .content-wrapper,
  .footer-wrapper {
    padding: 2.5em 4em;
  }
}
</style>
