<template>
  <time class="post-date">
    {{ postDate }}
  </time>
</template>

<script>
export default {
  name: 'PostDate',
  props: {
    postDate: String,
  }
}
</script>

<style lang="scss" scope>
.post-date {
  font-size: .75rem;
}
</style>
