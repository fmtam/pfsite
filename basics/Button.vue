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
  }
}
</script>

<style lang="scss" scoped>
.button {
  display: inline-block;
  padding: .5em .84em;
  background-color: #ddd;
  border: 0;
  border-radius: $radius/4;
  font-size: 1.125rem;
  &-submit {
    color: #fff;
    background-color: $main-color;
  }
  &:hover {
    cursor: pointer;
    opacity: .86;
  }
  &:focus {
    outline: none;
    border: 0;
  }
}
</style>