<template>
  <article class="content">

    <div class="post-meta"><time>date here</time></div>
    <div class="post-tags-wrap">
      <div class="post-tag">post tags here</div>
    </div>
    <SNSshare />
    <PageTitle :postTitle="title" />

    <!--  -->
    <div class="">
      post contents here.
    </div>

  </article>
</template>

<script>
import { sourceFileArray } from '@/contents/posts/summary.json'
import SNSshare from '@/components/SNSshare'
import PageTitle from '@/basics/PageTitle'

export default {
  components: {
    PageTitle, SNSshare,
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

  }

}
</script>