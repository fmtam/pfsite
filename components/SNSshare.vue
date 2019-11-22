<template>
  <ul class="sns-list">
    <li class="sns-list-item">
      <a class="sns-link" :href="getUrl(twitter)" target="_blank" rel="nofollow">
        <i class="fab fa-twitter"></i>
        </a>
    </li>
    <li class="sns-list-item">
      <a class="sns-link" :href="getUrl(line)" target="_blank" rel="nofollow">
        <i class="fab fa-line"></i>
        </a>
    </li>
    <li class="sns-list-item">
      <a class="sns-link" :href="getUrl(facebook)" target="_blank" rel="nofollow">
        <i class="fab fa-facebook-f"></i>
        </a>
    </li>
  </ul>
</template>

<script>
export default {
  name: 'SNSshare',

  props: {
    title: String,
  },

  data() {
    return {
      params: [`https://sample.com${this.$route.path}`, this.title],
      twitter: `//twitter.com/intent/tweet?url={0}&amp;text={1}`,
      line: `//line.com/?url={0}&amp;title={1}`,
      facebook: `//facebook.com/sharer/sharer.php?u={0}`,
      hatena: `//b.hatena.ne.jp/add?mode=confirm&amp;url={0}&amp;title={1}`,
    }
  },

  methods: {
    getUrl(sns) {
      return this.formatByArr(sns, this.params)
    },
    formatByArr(snsUrl, params) {
      params = params.map((x) => encodeURIComponent(x))

      return snsUrl.replace(/\{(\d+)\}/g, (m, k) => {
        return params[k]
      })
    },
  },

  computed: {
    faMapMarkerAlt() {
      return faMapMarkerAlt
    },
  },
}
</script>

<style lang="scss" scoped>
.sns-list {
  display: flex;
  padding: 0;
  list-style-type: none;
  justify-content: space-evenly;
  width: 100%;
}

.sns-list-item + .sns-list-item {
  margin-left: 1em;
}

.sns-link {
  display: inline-block;
}
</style>
