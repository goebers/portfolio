<template>
  <div class="index-page">
    <div class="content">
      <h1 class="site-title">
        Robert Laitila
      </h1>
      <About />
    </div>
    <Footer />
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss">
.index-page {
  padding: 1.5em 2.5em;
  width: 100%;
}

.site-title {
  font-size: $font-site-mobile;
  width: 100%;
  text-align: center;
  margin-bottom: 0.25em;
}

.content {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

@media only screen and (min-width: $breakpoint-small-desktop) {
  .site-title {
    font-size: $font-site;
  }
}
</style>
