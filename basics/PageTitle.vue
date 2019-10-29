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
<<<<<<< HEAD
=======
  text-transform: uppercase;
  font-size: 2rem;
  color: $main-color;
>>>>>>> a48eec8... update
}
</style>
