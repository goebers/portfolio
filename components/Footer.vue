<template>
  <div class="footer">
    <div class="footer-content container">
      <div class="footer-left">
        <p class="small-paragraph">
          Site created with
          <a class="link" href="https://nuxtjs.org/" target="_blank">
            Nuxt.js
          </a>
          and served using
          <a class="link" href="https://pages.github.com/" target="_blank">
            GitHub pages.
          </a>
        </p>
      </div>
      <div class="footer-center">
        <p class="small-paragraph">
          Socials
        </p>
      </div>
      <div class="footer-right">
        <p class="small-paragraph">
          © Robert Laitila {{ currentYear }}
        </p>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'Footer',
  data () {
    return {
      currentYear: new Date().getFullYear()
    }
  }
}
</script>
<style scoped lang="scss">
.footer-content {
  display: flex;
  flex-direction: column;
}

.footer-left,
.footer-center,
.footer-right {
  flex: 1 0 100%;
}

@media only screen and (min-width: $breakpoint-large-mobile) {
  .footer-content {
    flex-direction: row;
    align-items: center;
  }

  .footer-left,
  .footer-center,
  .footer-right {
    display: flex;
    flex: 1 0 33%;
    height: 100%;
  }

  .footer-left {
    justify-content: flex-start;
  }

  .footer-center {
    justify-content: center;
  }

  .footer-right {
    justify-content: flex-end;
  }
}
</style>
