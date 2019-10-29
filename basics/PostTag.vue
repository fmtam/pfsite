<template>
  <span class="post-tag">{{ postTag }}</span>
</template>
<script>
export default {
  name: 'PostTag',
  props: {
    postTag: String,
  },
}
</script>

<style lang="scss" scoped>
.post-tag {
  display: inline-block;
  font-size: 0.75rem;
  padding: 0.2em 0.4em;
  background-color: $positive-color;
  border-radius: 4px;
  color: #fff;
  &::before {
    content: '#';
  }
}
</style>
