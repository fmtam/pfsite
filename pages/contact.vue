<template>
  <div class="page-content l-container">
    <section>
      <PageTitle title="contact" />
      <div class="board">
        <p>some text here...</p>
      </div>
    </section>
    <section>
      <!-- TODO make it component -->
      <form @submit.prevent="submit" class="form">
        <div class="form-item">
          <FormInputLabel labelFor="inputSenderName" labelName="Name" class="form-input-label" />
          <FormInput inputType="text" inputPlaceholder="Your Name" name="senderName" required="true" id="inputSenderName" />
        </div>
        <div class="form-item">
          <FormInputLabel labelFor="inputSenderEmail" labelName="Mail" class="form-input-label" />
          <FormInput inputType="email" inputPlaceholder="Your Mail" name="senderName" required="true" id="inputSenderName" />
        </div>
        <div class="form-item">
          <FormInputLabel labelFor="inputSenderEmail" labelName="Comment" class="form-input-label" />
          <FormTextarea textareaName="senderComment" textPlaceholder="comment here" required="true" />
        </div>
        <div class="form-item">
          <Button btnType="submit" btn="button-submit" buttonText="Submit"/>
        </div>
      </form>
    </section>
  </div>
</template>

<script>
import PageTitle from '@/basics/PageTitle'
import FormInputLabel from '@/basics/FormInputLabel'
import FormInput from '@/basics/FormInput'
import FormTextarea from '@/basics/FormTextarea'
import Button from '@/basics/Button'

export default {
  components: {
    PageTitle, FormInputLabel, FormInput, FormTextarea, Button
  },
  methods: {
    submit() {
      alert('submit.')
    }
  }
}
</script>

<style lang="scss" scoped>
.l-container {
  display: grid;
  grid-template-columns: 30% 70%;
  grid-gap: 40px;
}

.page-title {
  margin-bottom: $gutter*2;
}

.board {
  padding: 1em;
  background-color: #fff;
}

.form {
  padding: 2rem;
  background-color: $main-color;
}

.form-item {
  display: flex;
  flex-direction: column;
  + .form-item {
    @include mq-up(sm) {
      margin-top: 2rem;
    }
  }
}

.form-input-label {
  margin-bottom: .625rem;
  color: #fff;
}
</style>
