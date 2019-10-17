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
  background-color: $main-color;
  text-align: center;
  &:hover,
  &:focus,
  &:active,
  &:visited {
    outline: 0;
    border: 0;
    text-decoration: none;
  }
  // &:hover .brand {
  //   outline: none;
  //   border: 0;
  //   text-decoration: none;
  //   transform: scale(1.5) rotateY(180deg);
  // }
}

.brand {
  display: inline-block;
  font-style: normal;
  font-weight: 800;
  color: #fff;
  transition: all .24s ease-in;
}

</style>
