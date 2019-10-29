<template>
  <div v-if="workList.length > 0">
    <section class="post-container">
      <Post v-for="work in workList" :work="work" :key="work.id" />
    </section>
    <div class="more" v-if="isActive" @click="getMore()">More...</div>
  </div>
  <div v-else>
    <p style="text-align: center;">Loading...</p>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'
import Work from '@/components/Works/Work'

export default {
  name: 'Works',
  components: {
    Work,
  },
  data() {
    return {
      isActive: true,
    }
  },
  mounted() {
    this.getWorkList()
    this.judgeMoreActive
  },
  computed: {
    ...mapState('works', ['workList', 'lastFlg', 'count', 'current', 'next']),
    judgeMoreActive() {
      if (this.lastFlg) {
        this.isActive = false
      }
    },
  },
  methods: {
    ...mapActions('works', ['getWorkList']),
    getMore() {
      this.getWorkList()
      this.judgeMoreActive
    },
  },
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
