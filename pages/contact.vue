<template>
  <div>
    <PageTitle title="contact"></PageTitle>

    <p>some text</p>

    <hr />

    <div class="">

      <div class="form">

        <!-- TODO make it component -->
        <form @submit.prevent="submit" >
          <ul class="form-list">
            <li class="form-list-item">
              <label for="email">email</label>
              <input id="email" type="text" class="form-list-input"/>
            </li>
            <li class="form-list-item">
              <label for="password">password</label>
              <input id="password" type="text" class="form-list-input"/>
            </li>
          </ul>
        </form>

      </div>

    </div>
  </div>
</template>

<script>
import PageTitle from '@/basics/PageTitle'

export default {
  components: {
    PageTitle,
  }
}
</script>

<style lang="scss" scoped>
.form-list {
  outline: none;
  padding: 0;
  list-style-type: none;
}

.form-list-input {
  padding: .4em;
  font-size: 1.4rem;
}
</style>
