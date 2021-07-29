<template>
  <div class="error-layout container">
    <div class="error-layout__content">
      <h1
        v-if="error.statusCode === 404"
        class="title"
      >
        Page not found ☠️
      </h1>
      <h1
        v-else
        class="title"
      >
        An unexpected error occurred ☠️
      </h1>
      <a
        href="/"
        class="paragraph link"
        rel="noreferrer"
      >
        Let's get you back to the front page
      </a>
    </div>
  </div>
</template>
<script>
export default {
  layout: 'error',
  props: {
    error: {
      type: Object,
      required: true
    }
  }
}
</script>
<style lang="scss">
.error-layout {
  display: flex;
  flex: 1;

  &__content {
    padding: 2rem 0;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
}
</style>
