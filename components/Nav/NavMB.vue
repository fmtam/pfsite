<template>
  <ul class="nav-list-MB">
    <li class="item01">item01</li>
    <li class="item02">item02</li>
    <li class="item03">item03</li>
  </ul>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
.nav-list-MB {
  display: flex;

  @media (min-width: 400px) {
    display: none;
  }
}
</style>