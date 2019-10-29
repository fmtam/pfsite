<template>
  <div class="l-page">
<<<<<<< HEAD
=======
    <Hero />
>>>>>>> a48eec8... update
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
  // @include mq-up(sm) {
  //   flex-direction: row;
  // }
}

.main {
  padding: 1rem;
  @include mq-up(sm) {
    // margin-left: 4rem;
    padding: 5rem;
  }
  flex-grow: 1;
}

</style>
