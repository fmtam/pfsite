<template>
  <div v-if="postList.length > 0">
    <section class="post-container">
      <Post v-for="post in postList" :post="post" :key="post.id" />
    </section>
    <div class="more" v-if="isActive" @click="getMore()">More...</div>
  </div>
  <div v-else>
    <p style="text-align: center;">Loading...</p>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'
import Post from '@/components/Blog/Post'

export default {
  name: 'Posts',
  components: {
    Post,
  },
  data() {
    return {
      isActive: true
    }
  },
  mounted() {
    this.getPostList()
    this.judgeMoreActive
  },
  computed: {
    ...mapState(
      'posts', ['postList', 'lastFlg', 'count', 'current', 'next']
    ),
    judgeMoreActive() {
      if(this.lastFlg) {
        this.isActive = false
      }
    }
  },
  methods: {
    ...mapActions (
      'posts', ['getPostList']
    ),
    getMore() {
      this.getPostList()
      this.judgeMoreActive
    }
  }
}
</script>

<style lang="scss" scoped>
.post-container {
  display: grid;
  grid-gap: 2rem;
  grid-auto-rows: auto;
  @include mq-up(sm) {
    grid-template-columns: repeat(1, 1fr);
  }
  @include mq-up(md) {
    grid-template-columns: repeat(2, 1fr);
  }
  @include mq-up(xl) {
    grid-template-columns: repeat(3, 1fr);
  }
}

</style>
