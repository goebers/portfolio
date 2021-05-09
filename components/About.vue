<template>
  <div class="about-wrapper">
    <div class="picture-wrapper">
      <img class="picture" src="@/static/img/me.jpg">
    </div>
    <div class="desc-wrapper">
      <h1 class="title">
        About me
      </h1>
      <p class="paragraph">
        Currently working as a front-end web developer @
        <a
          class="link"
          href="https://lamia.fi/"
          target="_blank"
        >
          Lamia
        </a>
        & finishing up my Bachelor's degree at
        <a
          class="link"
          href="https://www.metropolia.fi/fi"
          target="_blank"
        >
          Metropolia University of Applied Sciences.
        </a>
      </p>
      <p class="paragraph">
        I have several years of experience in different web dev jobs. Started my university studies in the the fall of 2016 have and ever since been perfecting my craft.
      </p>
    </div>
  </div>
</template>
<script>
export default {
  name: 'About'
}
</script>
<style lang="scss">
.about-wrapper {
  display: flex;
  flex-direction: column;
  max-width: 100%;
}

.picture-wrapper,
.desc-wrapper {
  flex: 0 0 100%;
}

.picture {
  max-width: 100%;
  height: auto;
}

.desc-wrapper {
  .title {
    font-size: $font-title-mobile;
    margin-bottom: 1.5rem;
  }

  .paragraph {
    font-size: $font-paragraph-mobile;
    margin-bottom: 0.75rem;
  }
}

.link {
  text-decoration: none;
  color: black;
  font-style: italic;
  font-weight: $font-weight-bold;

  &:hover {
    color: grey;
  }
}

@media only screen and (min-width: $breakpoint-small-desktop) {
  .about-wrapper {
    flex-direction: row;
  }

  .picture-wrapper,
  .desc-wrapper {
    flex: 0 0 50%;
  }

  .desc-wrapper {
    margin: 0 1em;

    .title {
      font-size: $font-title;
      margin-bottom: 2rem;
    }

    .paragraph {
      font-size: $font-paragraph;
    }
  }
}
</style>
