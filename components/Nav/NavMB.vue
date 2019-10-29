<template>
  <nav class="nav is-MB">
    <ul class="nav-list-MB">
      <li class="nav-list-item">
        <nuxt-link class="nav-list-link" to="/about">About</nuxt-link>
      </li>
      <li class="nav-list-item">
        <nuxt-link class="nav-list-link" to="/works">Works</nuxt-link>
      </li>
      <li class="nav-list-item">
        <nuxt-link class="nav-list-link" to="/blog">Blog</nuxt-link>
      </li>
      <li class="nav-list-item">
        <nuxt-link class="nav-list-link" to="/contact">Contact</nuxt-link>
      </li>
    </ul>
  </nav>
</template>

<style lang="scss" scoped>
.nav-list-MB {
  display: flex;
  justify-content: space-evenly;
  padding: 0;
  list-style-type: none;
  @include mq-up(sm) {
    display: none;
  }
}
</style>
