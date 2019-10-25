<template>
  <label :for="labelFor" class="form-input-label">
    {{ labelName }}
  </label>
</template>

<script>
export default {
  name: 'FormInputLabel',
  props: {
    labelName: String,
    labelFor: String,
  }
}
</script>

<style lang="scss" scoped>
.form-input-label {
  font-size: 1.125rem;
  font-weight: 800;
  color: $main-color;
}
</style>
