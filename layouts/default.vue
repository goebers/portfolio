<template>
  <div class="default-layout">
    <Nuxt class="content-wrapper" />
    <Footer class="footer-wrapper" />
  </div>
</template>

<style lang="scss">
html {
  font-family: $font-family;
  font-size: $font-default-size;
  font-weight: $font-weight-default;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
}

h1 {
  font-weight: $font-weight-bold;
}

.content-wrapper {
  padding: 1.5em 2.5em;
}

.footer-wrapper {
  background-color: lightgray;
  padding: 1.5em 2.5em;
}
</style>
