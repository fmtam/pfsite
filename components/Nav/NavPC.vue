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
<<<<<<< HEAD
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
=======
          <a
            href="//github.com/fmtam"
            class="nav-sns-link"
            title="GitHub"
            target="_blank"
          >
            <Icon class="fab fa-github" />
          </a>
        </li>
        <li class="nav-sns-item">
          <a
            href="//twitter.com/tweets"
            class="nav-sns-link"
            title="twitter"
            target="_blank"
          >
            <Icon class="fab fa-twitter" />
          </a>
        </li>
        <li class="nav-sns-item">
          <a
            href="//instagram.com"
            class="nav-sns-link"
            title="instagram"
            target="_blank"
          >
            <Icon class="fab fa-instagram" />
          </a>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script>
import Brand from '@/basics/Brand'
import Icon from '@/basics/Icon'

export default {
  components: {
    Brand,
    Icon,
  },
}
</script>

<style lang="scss" scoped>
.nav {
  display: none;
  i {
    font-style: normal;
>>>>>>> a48eec8... update
  }
}

.nav.is-PC {
  @include mq-up(sm) {
    position: fixed;
    top: 0;
    left: 0;
    display: flex;
    flex-direction: column;
    width: 64px;
    min-height: 100vh;
    background-color: #fff;
    overflow: hidden;
    box-shadow: 2px 0 4px rgba(0, 0, 0, 0.15);
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
<<<<<<< HEAD
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
=======
    li + li {
      margin-top: 5rem;
    }
    a {
      text-decoration: none;
>>>>>>> a48eec8... update
    }
  }
}

.nav-bottom {
  padding: 1em;
  text-align: center;
  a {
    text-decoration: none;
  }
<<<<<<< HEAD

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

=======
}

.nav-sns-list {
  list-style-type: none;
  padding: 0;
  font-size: 1.25rem;
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
    color: $main-color;
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
  font-size: 0.875rem;
  width: 2em;
  height: 2em;
  padding: 0.4em;
  background-color: $main-color;
  border-radius: 100%;
}

.fa-github {
  &:hover {
    color: $GitHub-color;
  }
}

.fa-twitter {
  &:hover {
    color: $Twitter-color;
  }
}

.fa-instagram {
  &:hover {
    color: $Instagram-color;
  }
}
>>>>>>> a48eec8... update
</style>
