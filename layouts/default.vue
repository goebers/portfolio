<template>
  <div class="default-layout">
    <ThemeToggleSwitch />
    <slot />
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
  @include themed() {
    background-color: t('bg-color');
  }

  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

.footer-wrapper {
  @include themed() {
    background-color: t('footer-bg-color');
  }
}
</style>
