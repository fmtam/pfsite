<template>
  <div class="nav-container">
    <NavPC/>
    <NavMB/>
  </div>
</template>

<script>
import NavPC from '~/components/Nav/NavPC'
import NavMB from '~/components/Nav/NavMB'

export default {
  components: {
    NavPC, NavMB
  }
}
</script>

<style lang="scss" scoped>
.nav-container {
  @include mq-up(md) {
    position: sticky;
    top: 0;
    left: 0;
  }
}
</style>