<template>
  <div class="error-layout">
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
