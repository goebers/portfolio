<template>
  <div class="index-page container">
    <h1 class="title">
      Robert Laitila
    </h1>
    <About class="about-wrapper" />
    <Skills class="skills-wrapper" />
  </div>
</template>

<script>
export default {}
</script>

<style scoped lang="scss">
.index-page {
  width: 100%;
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

.title {
  margin-top: 1.5rem;
  width: 100%;
  text-align: center;
}

.title,
.about-wrapper,
.skills-wrapper {
  margin-bottom: 1.5rem;
}

@media only screen and (min-width: $breakpoint-large-mobile) {
  .title,
  .about-wrapper,
  .skills-wrapper {
    margin-bottom: 2rem;
  }
}
</style>
