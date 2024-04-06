<template>
  <div class="footer">
    <div class="footer-content container">
      <div class="footer-left">
        <p class="small-paragraph">
          Site created with
          <a
            class="link"
            href="https://nuxt.com/"
            target="_blank"
            rel="noreferrer"
            >Nuxt</a
          >
          and served statically using
          <a
            class="link"
            href="https://www.digitalocean.com/products/app-platform/"
            target="_blank"
            rel="noreferrer"
            >DigitalOcean App Platform</a
          >.
        </p>
      </div>
      <div class="footer-center">
        <div class="content">
          <p class="small-paragraph">Socials</p>
          <div class="social-icons">
            <a
              class="link"
              href="https://www.linkedin.com/in/robert-laitila-09307610b/"
              target="_blank"
              rel="noreferrer"
              aria-label="Link to my LinkedIn profile"
            >
              <svgo-linkedin class="icon" />
            </a>
            <a
              class="link"
              href="https://github.com/goebers/"
              target="_blank"
              rel="noreferrer"
              aria-label="Link to my GitHub profile"
            >
              <svgo-github class="icon" />
            </a>
            <a
              class="link"
              href="https://dribbble.com/goebers"
              target="_blank"
              rel="noreferrer"
              aria-label="Link to my Dribbble profile"
            >
              <svgo-dribbble class="icon" />
            </a>
          </div>
        </div>
      </div>
      <div class="footer-right">
        <p class="small-paragraph">© Robert Laitila {{ currentYear }}</p>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'Footer',
  computed: {
    currentYear() {
      return new Date().getFullYear();
    },
  },
};
</script>
<style lang="scss">
.footer-content {
  display: flex;
  flex-direction: column;
  padding-top: 1rem;
  padding-bottom: 1rem;
}

.footer-left,
.footer-center {
  margin-bottom: 0.75rem;
}

.footer-left,
.footer-center,
.footer-right {
  flex: 1 0 100%;
  text-align: center;
  word-wrap: break-word;
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
    transition: 300ms;

    path {
      @include themed() {
        fill: t('text-color');
      }
    }

    &:hover {
      transform: scale(0.85);
    }
  }
}

@media only screen and (min-width: $breakpoint-large-mobile) {
  .footer-content {
    flex-direction: row;
    align-items: center;
  }

  .footer-left,
  .footer-center {
    margin-bottom: 0;
  }

  .footer-left,
  .footer-center,
  .footer-right {
    display: flex;
    flex: 1 0 33%;
    height: 100%;
  }

  .footer-left {
    text-align: left;
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
