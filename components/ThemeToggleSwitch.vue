<template>
  <div class="theme-toggle__wrapper container">
    <label class="theme-toggle__switch">
      <input
        type="checkbox"
        :checked="!isLightTheme"
        @click="changeTheme"
      >
      <span class="theme-toggle__slider" />
    </label>
  </div>
</template>
<script>
export default {
  name: 'ThemeToggleButton',
  computed: {
    nextTheme () {
      return this.$colorMode.value === 'light' ? 'dark' : 'light'
    },
    isLightTheme () {
      return this.$colorMode.value === 'light'
    }
  },
  methods: {
    changeTheme () {
      if (this.isLightTheme) {
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
    margin-top: 1.5rem;
  }

  &__slider {
    position: absolute;
    cursor: pointer;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    -webkit-transition: 300ms;
    transition: 300ms;
    border-radius: 35px;
    background-color: $theme-bg-color-base;

    &::before {
      position: absolute;
      content: "";
      height: 25px;
      width: 25px;
      left: 5px;
      bottom: 5px;
      background-color: $toggle-color-base;
      -webkit-transition: 300ms;
      transition: 300ms;
      border-radius: 50%;
    }

    &:hover {
      &::before {
        -webkit-transform: translateX(4px);
        -ms-transform: translateX(4px);
        transform: translateX(4px);
      }
    }
  }

  &__switch {
    position: relative;
    display: inline-block;
    width: 60px;
    height: 35px;

    input {
      opacity: 0;
      width: 0;
      height: 0;

      &:checked + .theme-toggle__slider::before {
        -webkit-transform: translateX(26px);
        -ms-transform: translateX(26px);
        transform: translateX(26px);
      }

      &:checked + .theme-toggle__slider {
        background-color: $theme-bg-color-checked;
      }

      &:checked {
        &:hover {
          + .theme-toggle__slider::before {
            -webkit-transform: translateX(22px);
            -ms-transform: translateX(22px);
            transform: translateX(22px);
          }
        }
      }
    }
  }
}
</style>
