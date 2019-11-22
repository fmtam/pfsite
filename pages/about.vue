<template>
  <div>
    <PageTitle title="About"/>
    <div class="l-about-container">
      <div class="about-content about-content-l">
        <p>about contents goes here.</p>
      </div>
      <div class="about-content about-content-r">
        <p>about contents goes here.</p>
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
.l-about-container {
  display: grid;
  grid-gap: $gutter*2;
  @include mq-up(md) {
    grid-template-columns: repeat(2, 50%);
  }
}

.about-content {
  padding: $gutter;
  &-l {
    background-color: $sub-color;
  }
  &-r {
    background-color: $accent-color;
  }
}

</style>