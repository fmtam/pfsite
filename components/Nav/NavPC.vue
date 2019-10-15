<template>
  <nav class="nav is-PC">
    <Logo />
    <ul class="nav-list-pc">
      <li><nuxt-link to="/about" title="about myself">A</nuxt-link></li>
      <li><nuxt-link to="/works" title="works">W</nuxt-link></li>
      <li><nuxt-link to="/posts" title="some posts by me">P</nuxt-link></li>
      <li><nuxt-link to="/contact" title="contact me">C</nuxt-link></li>
    </ul>
    <div class="nav-bottom">
      <nuxt-link to="/">L</nuxt-link>
    </div>
  </nav>
</template>

<script>
import Logo from '~/basics/logo'

export default {
  components: {
    Logo,
  }
}
</script>

<style lang="scss" scoped>
.nav {
  display: none;
}

@media (min-width: 400px) {
  .nav.is-PC {
    display: flex;
    flex-direction: column;
    max-width: 80px;
    min-height: 100vh;
    background-color: #ddd;
    overflow: hidden;
  }

  .nav-list-pc {
    padding: 1em;
    display: flex;
    flex-direction: column;
    flex-grow: 1;
    justify-content: center;
    list-style-type: none;
    text-align: center;
    li + li {
      margin-top: 5rem;
    }
    a {
      text-decoration: none;
    }
  }
}

.nav-bottom {
  padding: 1em;
  text-align: center;
  background-color: #fff;
  a {
    text-decoration: none;
  }
}

</style>
