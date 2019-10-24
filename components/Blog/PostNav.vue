<template>
  <nav>
    <ul class="post-nav-list">
      <li class="post-nav-list-item"><nuxt-link to="">1 {{postTitle}}</nuxt-link></li>
    </ul>
  </nav>
</template>

<script>
export default {
  name: 'PostNav',
  mounted() {

  }
}
</script>

<style lang="scss" scoped>
.post-nav-list {
  padding: 0;
  list-style-type: none;
}
</style>