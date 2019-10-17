<template>
  <div class="l-page">
    <Nav />
    <aside class="post-aside">
      <h4>toc</h4>
      <ul>
        <li>Yet Another Post for Sample</li>
        <li>Yet Another Post for Sample</li>
      </ul>
    </aside>
    <main class="main">
      <nuxt />
    </main>
    <aside class="post-aside post-aside-nav">
      <ul class="post-nav-list">
        <li class="post-nav-list-item">1</li>
        <li class="post-nav-list-item">2</li>
        <li class="post-nav-list-item">3</li>
        <li class="post-nav-list-item">4</li>
      </ul>
    </aside>
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

<style lang="scss">
// .l-page {
//   position: relative;
//   display: flex;
//   flex-direction: column;
//   min-height: 100vh;
//   margin: auto;
//   @include mq-up(sm) {
//     flex-direction: row;
//   }
// }

.l-page {
  position: relative;
  display: grid;
  grid-template-columns: 64px 180px 1fr 100px;
}

.post-aside {
  padding: 2rem;
  background-color: $light-blue;
  &-nav {
    height: 100vh;
    background-color: $main-color;
    margin-left: 0;
    width: 100px;
    max-width: 100px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
}

.main {
  padding: 1rem;
  overflow: auto;
  max-height: 100vh;
  @include mq-up(sm) {
    padding: 4rem;
  }
  flex-grow: 1;
}

h3 {
  padding: 1em;
  background-color: #ddd;
  border-left: 4px solid #bbb;
}

h4 {
  padding: 1em;
  border-left: 4px solid #bbb;
}
</style>
