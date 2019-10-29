<template>
  <textarea
    :name="textareaName"
    :placeholder="textPlaceholder"
    class="form-textarea"
  >
  </textarea>
</template>

<script>
export default {
  name: 'FormTextarea',
  props: {
    textareaName: String,
    textPlaceholder: String,
  },
}
</script>

<style lang="scss" scoped>
.form-textarea {
  font-size: 1rem;
  padding: 0.625em;
  font-family: $font-sansSerif;
  border: 0;
  background-color: #f8f8f8;
  resize: block;
  min-height: $line-height * 7;
  outline: none;
  transition: $transition;
  &:focus {
    outline: solid 2px lighten($main-color, 10%);
    border: 0;
  }
  &::placeholder {
    color: $light-blue;
  }
}
</style>
