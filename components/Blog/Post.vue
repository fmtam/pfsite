<template>
  <div class="article-summary">
    <a :href="formatUrl" class="post-link">
      <div class="post-image">
        <img
          src="@/static/img/naniwo.jpg"
          alt="sample image"
          class="post-thumbnail"
        />
      </div>
      <div class="post-content">
        <PostDate :postDate="formatDate" />
        <PostTitle :postTitle="post.title" />
        <ul class="post-tags-list">
          <li class="post-tags-item" v-for="tag in formatTags" :key="tag.id">
            <PostTag :postTag="tag" />
          </li>
        </ul>
      </div>
    </a>
  </div>
</template>

<script>
import PostTitle from '@/basics/PostTitle'
import PostTag from '@/basics/PostTag'
import PostDate from '@/basics/PostDate'

export default {
  name: 'Post',
  components: {
    PostTitle,
    PostTag,
    PostDate,
  },
  props: {
    postTitle: String,
    post: Object,
  },
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
  .post-date {
    display: inline-block;
    margin-bottom: $gutter/2;
  }
  .post-title {
    font-size: 1.6rem;
    margin-bottom: $gutter/2;
  }
}

.post-link {
  display: block;
  background-color: #fff;
  text-decoration: none;
  width: 100%;
  height: 100%;
  transition: all 0.24s;
  &:hover {
    .post-thumbnail {
      transform: scale(1.1);
    }
    .post-image {
      &::before {
        opacity: 0;
      }
    }
  }
}

.post-image {
  position: relative;
  overflow: hidden;
  transition: 0.9s;
  &::before {
    content: '';
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

.post-thumbnail {
  width: 100%;
  height: auto;
  transition: all 0.24s;
  vertical-align: bottom;
}

.post-content {
  padding: $gutter $gutter * 2;
}

.post-tags-item {
  display: inline-block;
  padding: 0 0.2em;
}
</style>
