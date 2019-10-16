<template>
  <div v-if="postList.length > 0">
    <div>
      <Post v-for="post in postList" :post="post" :key="post.id" />
    </div>
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
