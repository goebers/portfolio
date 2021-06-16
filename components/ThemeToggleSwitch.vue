<template>
  <div class="theme-toggle__wrapper container">
    <label class="theme-toggle__switch">
      <input
        id="theme-toggle-switch"
        type="checkbox"
        :checked="!isLightTheme"
        @click="changeTheme"
      >
      <span class="theme-toggle__slider" />
    </label>
    <label
      for="theme-toggle-switch"
      class="theme-toggle__label"
    >
      Switch between themes
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

    &::selection {
      background: transparent;
    }

    &::-moz-selection {
      background: transparent;
    }

    &::-webkit-selection {
      background: transparent;
    }
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
      content: '';
      background-image: url('~/assets/icon/theme_light.svg');
      background-size: 33px 33px;
      height: 33px;
      width: 33px;
      left: 7px;
      bottom: 7px;
      background-color: transparent;
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
    width: 80px;
    height: 47px;

    input {
      opacity: 0;
      width: 0;
      height: 0;

      &:checked + .theme-toggle__slider::before {
        -webkit-transform: translateX(33px);
        -ms-transform: translateX(33px);
        transform: translateX(33px);
        background-image: url('~/assets/icon/theme_dark.svg');
      }

      &:checked + .theme-toggle__slider {
        background-color: $theme-bg-color-checked;
      }

      &:checked {
        &:hover {
          + .theme-toggle__slider::before {
            -webkit-transform: translateX(29px);
            -ms-transform: translateX(29px);
            transform: translateX(29px);
          }
        }
      }
    }
  }

  &__label {
    visibility: hidden;
  }
}
</style>
