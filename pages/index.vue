<template>
  <div class="index-page">
    <h1 class="title">
      Robert Laitila
    </h1>
    <About class="about-wrapper" />
    <Technologies class="technologies-wrapper" />
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss">
.index-page {
  width: 100%;
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

.title {
  width: 100%;
  text-align: center;
  margin-bottom: 1rem;
}

.about-wrapper,
.technology-wrapper {
  margin-bottom: 1rem;
}

@media only screen and (min-width: $breakpoint-large-mobile) {
  .title,
  .about-wrapper,
  .technology-wrapper {
    margin-bottom: 1.5rem;
  }
}
</style>
