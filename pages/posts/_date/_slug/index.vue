<template>
  <article class="content">
    <div class="post-title">title here</div>
    <div class="post-meta"><time>date here</time></div>
    <div class="post-tags-wrap">
      <div class="post-tag">post tags here</div>
    </div>
    <div>
      contents here
    </div>
  </article>
</template>

<script>
export default {

  head() {
    const title = ''
    const desc = this.description || ''

    return {
      title: title,
      meta: [
        { hid: 'description', name: 'decription', content: desc}
      ]
    }
  }
}
</script>