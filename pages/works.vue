<template>
  <div class="page-content">
    <PageTitle title="Works"/>
    <div class="l-container">
      <div class="work">
        <img src="@/static/img/naniwo.jpg" alt="omaeha..." class="work-thumbnail"/>
      </div>
      <div class="work">
        <img src="@/static/img/naniwo.jpg" alt="omaeha..." class="work-thumbnail"/>
      </div>
      <div class="work">
        <img src="@/static/img/naniwo.jpg" alt="omaeha..." class="work-thumbnail"/>
      </div>
      <div class="work">
        <img src="@/static/img/naniwo.jpg" alt="omaeha..." class="work-thumbnail"/>
      </div>
      <div class="work">
        <img src="@/static/img/naniwo.jpg" alt="omaeha..." class="work-thumbnail"/>
      </div>
    </div>
  </div>
</template>

<script>
import PageTitle from '@/basics/PageTitle'

export default {
  components: {
    PageTitle
  }
}
</script>

<style lang="scss" scoped>
<<<<<<< HEAD
</style>
=======
.l-container {
  display: grid;
  grid-template-columns: repeat(4, 300px);
  grid-gap: $gutter/2;
}

.page-title {
  margin-bottom: $gutter*2;
}

.work {
  &:first-of-type {
    grid-column: 1/3;
    grid-row: 1/3;
  }
}

.work-thumbnail {
  width: 100%;
}
</style>
>>>>>>> a48eec8... update
