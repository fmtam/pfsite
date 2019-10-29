<template>
  <button :type="btnType" class="button" :class="btn">{{ buttonText }}</button>
</template>

<script>
export default {
  name: 'Button',
  props: {
    btnType: String,
    buttonText: String,
    btn: String,
  },
}
</script>

<style lang="scss" scoped>
.button {
  display: inline-block;
  padding: 0.5em 0.84em;
  background-color: #ddd;
  border: 0;
  border-radius: $radius/4;
  font-size: 1.125rem;
  transition: $transition;
  &-submit {
    border-radius: 0;
    color: #fff;
    border: solid 4px #fff;
    background-color: transparent;
    &:hover,
    &:active {
      background-color: #fff;
      color: $main-color;
    }
  }
  &:hover {
    cursor: pointer;
    opacity: 0.86;
  }
  &:focus {
    outline: none;
    border: 0;
  }
}
</style>
