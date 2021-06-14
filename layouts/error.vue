<template>
  <div class="error-layout container">
    <div class="error-layout__content">
      <h1
        v-if="error.statusCode === 404"
        class="title"
      >
        Page not found
      </h1>
      <h1
        v-else
        class="title"
      >
        An unexpected error occurred
      </h1>
      <NuxtLink
        to="/"
        class="paragraph link"
      >
        To front page
      </NuxtLink>
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
  flex: 1;

  &__content {
    padding: 2rem 0;
    flex: 1;
  }
}
</style>
