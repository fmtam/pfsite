<template>
  <h2 class="pageTitle">{{ title }}</h2>
</template>

<script>
export default {
  name: 'PageTitle',
  props: {
    title: String,
  }
}
</script>

<style lang="scss" scoped>
.pageTitle {
  font-weight: 800;
}
</style>