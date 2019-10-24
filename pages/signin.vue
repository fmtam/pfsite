<template>
  <div class="login-form">
    <form @submit.prevent="login">
      <p class="error" v-if="error">{{ error }}</p>
      <p><input type="text" v-model="email" placeholder="email" name="email" /></p>
      <p><input type="text" v-model="password" placeholder="password" name="password" /></p>
      <div class="login-btn">
        <button type="submit">SUBMIT</button>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      error: null,
      email: '',
      password: '',
    }
  },
  methods: {
    async login() {
      console.log(this.registerdUser)
      try {
        await this.$store.dispatch('login', {
          email: this.email,
          password: this.password,
          authData: this.$store.state.registeredUser
        })
        this.$router.push('/')
      } catch(e) {
        this.error = e.message
      }
    }
  }
}
</script>

<style lang="scss" scoped>
</style>