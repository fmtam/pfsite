<template>
  <h2 class="post-title">{{ postTitle }}</h2>
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

</style>