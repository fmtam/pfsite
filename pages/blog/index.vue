<template>
  <div class="page-content">
    <PageTitle title="blog" />
    <Posts />
  </div>
</template>

<script>
import PageTitle from '@/basics/PageTitle'
import Posts from '@/components/Blog/Posts'

export default {
  components: {
    PageTitle, Posts,
  }
}
</script>

<style lang="scss" scoped>
 .page-title {
   margin-bottom: $gutter*2;
 }
</style>