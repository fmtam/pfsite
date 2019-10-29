<template>
  <section class="hero">
    this is a hero section.
  </section>
</template>

<script>
export default {
  name: 'Hero',
  props: {
    HeroText: String,
  },
}
</script>

<style lang="scss" scoped>
.hero {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: $gutter;
  width: 100%;
  height: 100vh;
  color: #fff;
  background-color: $main-color;
}
</style>
