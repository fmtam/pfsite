<template>
  <nav class="nav is-PC">
    <Brand />
    <ul class="nav-list-pc">
      <li>
        <nuxt-link class="nav-list-link" to="/about" title="about myself">
          <i class="nav-list-icon">A</i>
        </nuxt-link>
      </li>
      <li>
        <nuxt-link class="nav-list-link" to="/works" title="works">
          <i class="nav-list-icon">W</i>
        </nuxt-link>
      </li>
      <li>
        <nuxt-link class="nav-list-link" to="/blog" title="some blog post">
          <i class="nav-list-icon">B</i>
        </nuxt-link>
      </li>
      <li>
        <nuxt-link class="nav-list-link" to="/contact" title="contact me">
          <i class="nav-list-icon">C</i>
        </nuxt-link>
      </li>
    </ul>

    <div class="nav-bottom">
      <ul class="nav-sns-list">
        <li class="nav-sns-item">
          <a href="//github.com/fmtam" class="nav-sns-link" title="GitHub" target="_blank">
          <i class="fab fa-github"></i></a>
        </li>
        <li class="nav-sns-item">
          <a href="//twitter.com/tweets" class="nav-sns-link" title="twitter" target="_blank"><i class="fab fa-twitter"></i></a>
        </li>
        <li class="nav-sns-item">
          <a href="//instagram.com" class="nav-sns-link" title="instagram" target="_blank"><i class="fab fa-instagram"></i></a>
        </li>
      </ul>
    </div>

    </nav>
  </template>

  <script>
  import Brand from '~/basics/Brand'

  export default {
    components: {
      Brand,
    }
  }
  </script>

  <style lang="scss" scoped>
  .nav {
    display: none;
    i {
      font-style: normal;
    }
  }

  .nav.is-PC {
    @include mq-up(sm) {
      display: flex;
      flex-direction: column;
      width: 64px;
      min-height: 100vh;
      background-color: #fff;
      overflow: hidden;
      box-shadow: 2px 0 4px rgba(0, 0, 0, .15);
    }
  }

  .nav-list-pc {
    @include mq-up(sm) {
      display: flex;
      flex-direction: column;
      flex-grow: 1;
      justify-content: center;
      padding: 1em;
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
    background-color: #ccc;
    a {
      text-decoration: none;
      }
  }

  .nav-sns-list {
    list-style-type: none;
    padding: 0;
  }

  .nav-sns-item + .nav-sns-item {
    margin-top: 1em;
  }

  .nav-sns-link {
    display: flex;
    justify-content: center;
    align-items: center;
    &:hover,
    &:active,
    &:visited {
      color: rgb(48, 65, 87);
    }
  }

  .nav-list-link {
    display: flex;
    justify-content: center;
  }

  .nav-list-icon {
    display: flex;
    justify-content: center;
    align-items: center;
    color: #fff;
    font-weight: 800;
    font-size: .875rem;
    width: 2em;
    height: 2em;
    padding: .4em;
    background-color: #333;
    border-radius: 100%;
  }

</style>
