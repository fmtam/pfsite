<template>
  <div class="l-page">
    <Nav />
    <main class="main">
      <nuxt />
    </main>
  </div>
</template>

<script>
import Nav from '~/components/Nav'

export default {
  components: {
    Nav
  }
}
</script>

<style lang="scss" scoped>
.l-page {
  min-height: 100vh;
  margin: auto;
  display: flex;
  flex-direction: column;
  @media (min-width: 400px) {
    flex-direction: row;
  }
}

.main {
  padding: 4rem;
  flex-grow: 1;
  background-color: #f5f5f5;
}
</style>
