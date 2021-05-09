<template>
  <div class="default-layout">
    <Nuxt />
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
</style>
