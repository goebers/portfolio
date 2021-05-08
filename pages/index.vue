<template>
  <div class="container">
    <Header />
    <Footer />
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss">
* {
  font-family: 'Roboto', sans-serif;
}

.container {
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 1.5em 2.5em;
  min-height: 100vh;
}
</style>
