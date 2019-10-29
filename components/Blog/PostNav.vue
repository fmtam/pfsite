<template>
  <nav>
    <ul class="post-nav-list">
<<<<<<< HEAD
      <li class="post-nav-list-item"><nuxt-link to="">1 {{postTitle}}</nuxt-link></li>
=======
      <li class="post-nav-list-item">
        <nuxt-link to="#" class="post-nav-link">1 {{ postTitle }}</nuxt-link>
      </li>
      <li class="post-nav-list-item">
        <nuxt-link to="#" class="post-nav-link">1 {{ postTitle }}</nuxt-link>
      </li>
>>>>>>> a48eec8... update
    </ul>
  </nav>
</template>

<script>
export default {
  name: 'PostNav',
<<<<<<< HEAD
  mounted() {

  }
=======
  props: {
    postTitle: String,
  },
>>>>>>> a48eec8... update
}
</script>

<style lang="scss" scoped>
.post-nav-list {
  padding: 0;
  list-style-type: none;
}
<<<<<<< HEAD
</style>
=======

.post-nav-link {
  display: block;
  color: $text-color;
  text-decoration: none;
  padding: 1em;
  background-color: #fff;
  border-radius: $radius/4;
}
</style>
>>>>>>> a48eec8... update
