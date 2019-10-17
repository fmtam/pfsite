<template>
  <article class="content">
    <header class="post-header">
      <ul class="post-tag-list">
        <li class="post-tag-item" v-for="tag in formatTags" :key="tag.id">{{ tag }}</li>
      </ul>
      <PostTitle :postTitle="title" />
      <div class="post-meta"><time>{{ params.date }}</time></div>
      <SNSshare />
    </header>
    <div v-html="bodyHtml" class="post-content"></div>
  </article>
</template>

<script>
import { sourceFileArray } from '@/contents/posts/summary.json'
import SNSshare from '@/components/SNSshare'
import PostTitle from '@/basics/PostTitle'

export default {
  components: {
    PostTitle, SNSshare,
  },
  validate({ params }) {
    return sourceFileArray.includes(`contents/posts/markdown/${params.date}_${params.slug}.md`)
  },
  asyncData({ params }) {
    return Object.assign({}, require(`~/contents/posts/json/${params.date}_${params.slug}.json`), { params })
  },
  head() {
    const title = this.title + " | myPfsite"
    const url = `https://sample.com/posts/${this.params.date}/${this.params.slug}/`
    const desc = this.description || ''

    return {
      title: title,
      meta: [
        { hid: 'description', name: 'decription', content: desc },
        { hid: 'og:description', property: 'og:description', content: desc },
        { hid: 'og:type', property: 'og:type', content: 'article' },
        { hid: 'og:url', property: 'og:url', content: url },
        { hid: 'og:title', property: 'og:title', content: title }
      ],
      link: [{ rel: 'canonical', href: url }]
    }
  },
  computed: {
    formatTags() {
      return this.tags.split(',')
    },
    shareTitle() {
      return this.title + " | myPfsite"
    }

  },
  layout: 'blogPost',
}
</script>

<style lang="scss" scoped>
.post-header {
  border-bottom: solid 1px #ddd;
}

.post-tag-list {
  display: flex;
  padding: 0;
  list-style-type: none;
}

.post-tag-item {
  font-size: .75rem;
  padding: .2em .4em;
  color: #fff;
  background-color: $main-color;
  + .post-tag-item {
    margin-left: $gutter/2;
  }
}
</style>