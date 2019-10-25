<template>
  <input :type="inputType" :id="inputId" :name="inputName" :placeholder="inputPlaceholder" :required="required" class="form-input"/>
</template>

<script>
export default {
  name: 'FormInput',
  props: {
    inputType: String,
    inputName: String,
    inputId: String,
    inputPlaceholder: String,
    rquired: Boolean
  }
}
</script>

<style lang="scss" scoped>
.form-input {
  font-family: $font-sansSerif;
  padding: .625em;
  font-size: 1rem;
  transition: .2s;
  outline: none;
  border: 0;
  background-color: #f8f8f8;
  &:focus {
    outline: solid 2px lighten($main-color, 10%);
  }
  &::placeholder {
    color: $light-blue;
  }
}
</style>
