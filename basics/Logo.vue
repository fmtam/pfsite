<template>
  <nuxt-link to="/" class="brand-link">
    <i :class="snsName"></i>
  </nuxt-link>
</template>

<script>
export default {
  name: 'Logo',
  props: {
    name: String,
  },
}
</script>

<style lang="scss" scoped>
.logo {
  padding: 1em;
  width: 100%;
  font-style: normal;
  font-weight: 800;
  text-align: center;
  text-decoration: none;
  &:hover,
  &:focus,
  &:active,
  &:visited {
    outline: 0;
    border: 0;
  }
}
</style>
