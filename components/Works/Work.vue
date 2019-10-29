<template>
  <div class="article-summary">
    <a :href="formatUrl" class="work-link">
      <div class="work-image">
        <img
          src="@/static/img/naniwo.jpg"
          alt="sample image"
          class="work-thumbnail"
        />
      </div>
    </a>
  </div>
</template>

<script>
export default {
  name: 'Work',
  data() {
    return {
      baseParam: [],
    }
  },
  mounted() {
    this.baseParam = this.post.sourceBase.replace('.md', '').split('_')
  },
  computed: {
    formatDate() {
      return this.baseParam[0]
    },
    formatTags() {
      return this.post.tags.split(',')
    },
    formatUrl() {
      return `/blog/${this.baseParam[0]}/${this.baseParam[1]}`
    },
  },
}
</script>

<style lang="scss" scoped>
.article-summary {
  border-radius: $radius;
  overflow: hidden;
  box-shadow: 0 0 16px rgba(0, 0, 0, 0.15);
}

.work-link {
  display: block;
  background-color: #fff;
  text-decoration: none;
  width: 100%;
  height: 100%;
  transition: all 0.24s;
  &:hover {
    .work-thumbnail {
      transform: scale(1.1);
    }
    .work-image {
      &::before {
        opacity: 0;
      }
    }
  }
}

.work-image {
  position: relative;
  overflow: hidden;
  transition: 0.9s;
  &::before {
    content: 'image here';
    position: absolute;
    top: 0;
    left: 0;
    display: block;
    background-color: rgba(#000, 0.7);
    width: 100%;
    height: 100%;
    z-index: 2;
  }
}
</style>
