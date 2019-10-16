<template>
  <nav class="nav is-PC">
    <Brand />
    <ul class="nav-list-pc">
      <li>
        <nuxt-link to="/about" title="about myself">
          <i>A</i>
        </nuxt-link>
      </li>
      <li>
        <nuxt-link to="/works" title="works">
          <i>W</i>
        </nuxt-link>
      </li>
      <li>
        <nuxt-link to="/posts" title="some posts by me">
          <i>P</i>
        </nuxt-link>
      </li>
      <li>
        <nuxt-link to="/contact" title="contact me">
          <i>C</i>
        </nuxt-link>
      </li>
    </ul>

    <div class="nav-bottom">
      <ul class="nav-sns-list">
        <li class="nav-sns-item">
          <a href="//github.com/fmtam" class="nav-sns-link" title="github" target="_blank"><i>g</i></a>
        </li>
        <li class="nav-sns-item">
          <a href="//twitter.com/tweets" class="nav-sns-link" title="twitter" target="_blank"><i>t</i></a>
        </li>
        <li class="nav-sns-item">
          <a href="//instagram.com" class="nav-sns-link" title="instagram" target="_blank"><i>i</i></a>
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

  @media (min-width: 400px) {
    .nav.is-PC {
      display: flex;
      flex-direction: column;
      width: 64px;
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
    padding: .4em;
    border-radius: 100%;
    background-color: #002;
    color: #fff;
    width: 2em;
    height: 2em;
  }

</style>
