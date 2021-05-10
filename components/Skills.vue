<template>
  <div class="skills">
    <h1 class="title">
      Skills
    </h1>
    <div class="tech-list">
      <h3 class="small-title">
        Front-end
      </h3>
    </div>
    <div class="tech-list">
      <h3 class="small-title">
        Back-end
      </h3>
    </div>
    <div class="tech-list">
      <h3 class="small-title">
        Design-end
      </h3>
    </div>
  </div>
</template>
<script>
export default {
  name: 'Skills'
}
</script>
<style scoped lang="scss">
.skills {
  display: flex;
  flex-direction: column;
  max-width: 100%;

  .title {
    margin-bottom: 1.5rem;
  }
}

.tech-list {
  margin-bottom: 1rem;
}

@media only screen and (min-width: $breakpoint-small-desktop) {
  .skills {
    .title {
      margin-bottom: 2rem;
    }
  }
}
</style>
