<template>
  <nuxt-link
    to="/"
    class="brand-link"
  >
    <i class="brand">M</i>
  </nuxt-link>
</template>


<style lang="scss" scoped>
.brand-link {
  display: block;
  padding: 1em;
  width: 100%;
  background-color: #07273d;
  text-align: center;
  &:hover,
  &:focus,
  &:active,
  &:visited {
    outline: 0;
    border: 0;
    text-decoration: none;
  }
}

.brand {
  font-style: normal;
  font-weight: 800;
  color: #dee6f3;
}
</style>
