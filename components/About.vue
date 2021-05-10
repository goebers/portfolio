<template>
  <div class="about">
    <div class="picture-wrapper">
      <img class="picture" src="@/static/img/me.jpg" alt="CV picture">
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
<style scoped lang="scss">
.about {
  display: flex;
  flex-direction: column;
  max-width: 100%;
}

.picture-wrapper,
.desc-wrapper {
  flex: 0 0 100%;
}

.picture-wrapper {
  text-align: center;
}

.picture {
  max-width: 100%;
  height: auto;
}

.desc-wrapper {
  .title {
    margin-bottom: 1.5rem;
  }

  .paragraph {
    margin-bottom: 0.75rem;
  }
}

@media only screen and (min-width: $breakpoint-small-desktop) {
  .about {
    flex-direction: row;
  }

  .picture-wrapper,
  .desc-wrapper {
    flex: 0 1 50%;
  }

  .picture-wrapper {
    margin-right: 2em;
  }

  .desc-wrapper {
    .title {
      margin-bottom: 2rem;
    }
  }
}
</style>
