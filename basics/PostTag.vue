<template>
  <span class="post-tag">{{postTag}}</span>
</template>
<script>

export default {
  name: 'PostTag',
  props: {
    postTag: String,
  }
}
</script>

<style lang="scss" scoped>
.post-tag {
  font-size: .75rem;
  padding: .2em .4em;
  background-color: #85f8c8;
  border-radius: 4px;
  color: #fff;
}
</style>