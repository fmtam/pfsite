<template>
  <ul class="nav-list-MB">
    <li class="nav-list-item"><nuxt-link class="nav-list-link" to="/about">About</nuxt-link></li>
    <li class="nav-list-item"><nuxt-link class="nav-list-link" to="/works">Works</nuxt-link></li>
    <li class="nav-list-item"><nuxt-link class="nav-list-link" to="/blog">Blog</nuxt-link></li>
    <li class="nav-list-item"><nuxt-link class="nav-list-link" to="/contact">Contact</nuxt-link></li>
  </ul>
</template>

<style lang="scss" scoped>
.nav-list-MB {
  display: flex;
  justify-content: space-evenly;
  margin: 0;
  padding: $gutter;
  background-color: $main-color;
  list-style-type: none;
  @include mq-up(md) {
    display: none;
  }
}
</style>