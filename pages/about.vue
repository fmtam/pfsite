<template>
  <div class="page-content">
    <PageTitle title="About" />

    <div class="container">
      <div class="image-box">
        <img src="@/static/img/naniwo.jpg" class="image" />
      </div>
      <div class="text-box">
        <h2>NAME or TITLE</h2>
      </div>
    </div>

    <div class="spec-container">
      <div class="person">
        <h3 class="person-name">FirstName LastName</h3>
        <div class="person-sns">
          <ul class="person-sns-list">
            <li>
              <a href=""><i class="fab fa-twitter"></i></a>
            </li>
            <li>
              <a href=""><i class="fab fa-github"></i></a>
            </li>
            <li>
              <a href=""><i class="fab fa-instagram"></i></a>
            </li>
          </ul>
        </div>
      </div>
      <div class="person-skills">
        <ul class="person-skills-list">
          <li><i class="fab fa-html5"></i></li>
          <li><i class="fab fa-css3"></i></li>
          <li><i>a</i></li>
          <li><i>a</i></li>
          <li><i>a</i></li>
          <li><i>a</i></li>
          <li><i>a</i></li>
          <li><i>a</i></li>
          <li><i>a</i></li>
          <li><i>a</i></li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import PageTitle from '@/basics/PageTitle'
import pageMd from '@/contents/others/about.md'

export default {
  components: {
    PageTitle,
  },
}
</script>

<style lang="scss" scoped>
.page-title {
  margin-bottom: $gutter * 2;
}

.container {
  position: relative;
  display: grid;
  grid-template-columns: 50% 50%;
  margin-bottom: $gutter * 2;
}

.image {
  width: 100%;
}

.text-box {
  padding: $gutter * 2;
  background-color: #fff;
  transform: translateX(-100px) translateY(-100px);
}

.spec-container {
  display: flex;
}

.person {
  width: 40%;
}

.person-name {
  margin-bottom: $gutter;
}

.person-sns-list {
  display: grid;
  grid-template-columns: repeat(3, 30px);
  list-style-type: none;
}

.person-skills-list {
  display: grid;
  grid-template-columns: repeat(12, 30px);
  list-style-type: none;
}
</style>
