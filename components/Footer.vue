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
        <div class="content">
          <p class="small-paragraph">
            Socials
          </p>
          <div class="social-icons">
            <a
              class="link"
              href="https://www.linkedin.com/in/robert-laitila-09307610b/"
              target="_blank"
            >
              <LinkedInIcon class="icon" />
            </a>
            <a
              class="link"
              href="https://github.com/goebers/"
              target="_blank"
            >
              <GitHubIcon class="icon" />
            </a>
          </div>
        </div>
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
import LinkedInIcon from '~/assets/icon/linkedin.svg?inline'
import GitHubIcon from '~/assets/icon/github.svg?inline'

export default {
  name: 'Footer',
  components: { LinkedInIcon, GitHubIcon },
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
  text-align: center;
}

.footer-center {
  .content {
    display: flex;
    flex-direction: column;

    .small-paragraph {
      margin-bottom: 0.5rem;
    }
  }
}

.social-icons {
  .link {
    width: 100%;
    height: 100%;

    &:not(:last-child) {
      margin-right: 0.5rem;
    }
  }

  .icon {
    height: 48px;
    width: 48px;
  }
}

@media only screen and (min-width: $breakpoint-large-mobile) {
  .footer-content {
    flex-direction: row;
    align-items: center;
    padding-top: 1rem;
    padding-bottom: 1rem;
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
