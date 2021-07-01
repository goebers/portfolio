<template>
  <div
    class="default-layout"
    :class="getActiveClass"
  >
    <ThemeToggleSwitch />
    <Nuxt />
    <Footer class="footer-wrapper" />
  </div>
</template>
<script>
export default {
  data () {
    return {
      isLoaded: false
    }
  },
  computed: {
    getActiveClass () {
      if (this.isLoaded) {
        return 'loaded'
      } else {
        return ''
      }
    }
  },
  mounted () {
    setTimeout(() => {
      this.isLoaded = true
    }, 500)
  }
}
</script>
<style lang="scss">
*,
*::before,
*::after,
body {
  box-sizing: border-box;
  margin: 0;
}

.default-layout {
  opacity: 0;
  transition: opacity 1s ease-in-out;

  &.loaded {
    opacity: 1;
  }

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
