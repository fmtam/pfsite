<template>
  <div class="l-page">
    <Nav />
    <aside class="post-aside post-aside-toc">
      <h4>toc</h4>
      <ul class="post-toc-list">
        <li class="post-toc-item"><a href="#" class="post-toc-link">link</a></li>
      </ul>
    </aside>
    <main class="main">
      <nuxt />
    </main>
    <aside class="post-aside post-aside-nav">
      <PostNav />
    </aside>
  </div>
</template>

<script>
import Nav from '~/components/Nav'
import PostNav from '@/components/Blog/PostNav'

export default {
  components: {
    Nav, PostNav
  }
}
</script>

<style lang="scss">
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

.post-toc-list {
  padding: 0;
  list-style-type: none;
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

</style>
