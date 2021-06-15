<template>
  <div class="theme-toggle__wrapper">
    <button
      class="theme-toggle__button"
      @click="changeTheme"
    >
      toggle {{ nextTheme }} theme
    </button>
  </div>
</template>
<script>
export default {
  name: 'ThemeToggleButton',
  computed: {
    nextTheme () {
      return this.$colorMode.value === 'light' ? 'dark' : 'light'
    }
  },
  methods: {
    changeTheme () {
      if (this.$colorMode.value === 'light') {
        this.$colorMode.preference = 'dark'
      } else {
        this.$colorMode.preference = 'light'
      }
    }
  }
}
</script>
<style scoped lang="scss">
.theme-toggle {
  &__wrapper {
    position: absolute;
    top: 0;
    left: 0;
  }
}
</style>
