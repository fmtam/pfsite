<template>
  <div class="article-summary">
    <a :href="formatUrl" class="post-link">
      <div class="post-image">
        <img src="//placehold.it/640x320" alt="sample image" class="post-thumbnail">
      </div>
      <div class="post-content">
        <div><time class="post-date">{{ formatDate }}</time></div>
        <PostTitle :postTitle="post.title"/>
        <ul class="post-tags-list">
          <li class="post-tags-item" v-for="tag in formatTags" :key="tag.id">
            <div class="post-tag">{{ tag }}</div>
          </li>
        </ul>
      </div>

    </a>
  </div>
</template>

<script>
import PostTitle from '@/basics/PostTitle'

export default {
  name: 'Post',
  components: {
    PostTitle,
  },

  props: {
    postTitle: String,
    post: Object
  },

  data() {
    return {
      baseParam: []
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
      return `/posts/${this.baseParam[0]}/${this.baseParam[1]}`
    }
  }
}
</script>

<style lang="scss" scoped>
$radius: 1rem;
$gutter: 1rem;

.article-summary {
  border-radius: $radius;
  overflow: hidden;
  box-shadow: 0 0 24px rgba(0, 0, 0, .05);
}

.post-link {
  display: block;
  background-color: #fff;
  text-decoration: none;
  width: 100%;
  height: 100%;
  transition: all .24s;
  &:hover .post-thumbnail {
    transform: scale(1.1);
  }
}

.post-image {
  overflow: hidden;
}

.post-thumbnail {
  width: 100%;
  height: auto;
  transition: all .24s;
  vertical-align: bottom;
}

.post-content {
  padding: $gutter $gutter*2;
}

.post-date {
  font-size: .75rem;
  color: #aaa;
}

.post-tags-list {
  // display: flex;
  padding: 0;
  list-style-type: none;
}

.post-tags-item {
  display: inline-block;
  padding: 0 .2em;
}

.post-tag {
  font-size: .75rem;
  padding: .2em .4em;
  background-color: #85f8c8;
  border-radius: 4px;
  color: #fff;
}
</style>
