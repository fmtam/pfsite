<template>
  <article class="post">
    <div>
      <a :href="formatUrl" class="">{{ post.title }}</a>
      </div>
    <div class="post-date">{{ formatDate }}</div>
    <div class="" v-for="tag in formatTags" :key="tag.id"><div class="">{{ tag }}</div></div>
  </article>
</template>

<script>
export default {
  name: 'Post',
  props: {
    postTitle: String,
    post: Object
  },
  data() {
    return {
      baseParam: []
    }
  },
  mounted() {
    this.baseParam = this.post.sourceBase.replace('.md', '').split('_')
  },
  computed: {
    formatDate() {
      return this.baseParam[0]
    },
    formatTags() {
      return this.post.tags.split(',')
    },
    formatUrl() {
      return `/posts/${this.baseParam[0]}/${this.baseParam[1]}`
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
