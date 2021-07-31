<template>
  <div class="index-page container">
    <h1 class="title">
      Robert Laitila
    </h1>
    <About class="about-wrapper" />
    <Divider class="divider-wrapper" />
    <Skills class="skills-wrapper" />
    <Divider class="divider-wrapper" />
    <Contact class="contact-wrapper" />
  </div>
</template>
<style scoped lang="scss">
.index-page {
  width: 100%;
  display: flex;
  flex-direction: column;
}

.title {
  margin-top: 1.5rem;
  width: 100%;
  text-align: center;
}

.title,
.divider-wrapper,
.about-wrapper,
.skills-wrapper {
  margin-bottom: 1.5rem;
}

.contact-wrapper {
  margin-bottom: 3rem;
}

@media only screen and (min-width: $breakpoint-large-mobile) {
  .title,
  .divider-wrapper,
  .about-wrapper,
  .skills-wrapper {
    margin-bottom: 2rem;
  }

  .contact-wrapper {
    margin-bottom: 4rem;
  }
}
</style>
