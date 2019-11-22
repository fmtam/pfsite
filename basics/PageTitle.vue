<template>
  <h2 class="page-title">{{ title }}</h2>
</template>

<script>
export default {
  name: 'PageTitle',
  props: {
    title: String,
  },
}
</script>

<style lang="scss" scoped>
.page-title {
  font-weight: 800;
}
</style>
