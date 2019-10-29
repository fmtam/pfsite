<template>
  <h1 class="post-title">{{ postTitle }}</h1>
</template>

<script>
export default {
  name: 'PostTitle',
  props: {
    postTitle: String,
  },
}
</script>

<style lang="scss" scoped>
.post-title {
  color: $main-color;
  font-family: $font-serif;
  font-size: 2rem;
}
</style>
