<template>
  <div class="about">
    <div class="picture-wrapper">
      <img
        class="picture"
        src="@/static/img/me.jpg"
        alt="CV picture"
        width="500"
        height="500"
      >
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
          rel="noreferrer"
        >
          Lamia.
        </a>
      </p>
      <p class="paragraph">
        Recently finished up my Bachelor of Engineering degree in Information and Communications Technology at
        <a
          class="link"
          href="https://www.metropolia.fi/fi"
          target="_blank"
          rel="noreferrer"
        >
          Metropolia University of Applied Sciences.
        </a>
      </p>
      <p class="paragraph">
        I have several years of experience in different web dev jobs. I have always been interested about computers and got involved in IT already in elementary school. Then in 2013 started my Vocational School in
        <a
          class="link"
          href="https://www.keuda.fi/"
          target="_blank"
          rel="noreferrer"
        >
          Keuda.
        </a>
        Studied in information and communication technology with expertise in software production.
      </p>
      <p class="paragraph">
        After vocational school I started my university studies in the the fall of 2016. Ever ever since then I have been perfecting my craft and learning more technologies.
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
  margin-bottom: 2rem;
  display: flex;
  justify-content: center;
}

.picture {
  max-width: 100%;
  height: auto;
  width: auto;
  object-fit: cover;
}

.desc-wrapper {
  display: flex;
  flex-direction: column;
  justify-content: center;

  .title {
    margin-bottom: 1.5rem;
  }

  .paragraph {
    margin-bottom: 0.75rem;
  }
}

@media only screen and (min-width: $breakpoint-large-mobile) {
  .desc-wrapper {
    .title {
      margin-bottom: 1.75rem;
    }

    .paragraph {
      margin-bottom: 1rem;
    }
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
    margin-bottom: 0;
    justify-content: flex-start;
    margin-right: 2em;
    // height: 100%;
  }

  .picture {
    position: sticky;
    align-self: flex-start;
    top: 1.5rem;
  }

  .desc-wrapper {
    .title {
      margin-bottom: 2rem;
    }

    .paragraph {
      margin-bottom: 1.25rem;
    }
  }
}
</style>
