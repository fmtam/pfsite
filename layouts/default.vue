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
  @include mq-up(sm) {
    flex-direction: row;
  }
}

.main {
  padding: 1rem;
<<<<<<< HEAD
  overflow-x: hidden;
=======
  overflow: auto;
>>>>>>> a48eec8... update
  @include mq-up(sm) {
    padding: 4rem;
  }
  flex-grow: 1;
}

</style>
