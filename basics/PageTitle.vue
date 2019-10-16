<template>
  <h2 class="pageTitle">{{ title }}</h2>
</template>

<script>
export default {
  name: 'PageTitle',
  props: {
    title: String,
  },
  data() {
    return {
      title: '',
    }
  }
}
</script>

<style lang="scss" scoped>
.pageTitle {
  font-weight: 800;
}
</style>