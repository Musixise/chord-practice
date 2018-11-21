<template>
  <div class="file-container">
    <router-link :to="uri">
      <img src="@/assets/folder.svg"/>
      <span>{{ text }}</span>
    </router-link>
  </div>
</template>
<style lang="scss" scoped>
a{
  text-decoration: none;
}
.file-container{
    height: 60px;
    width: 60px;
    text-align: center;
    cursor: pointer;
    img {
      width: 60px;
      height: 60px;
    }
    span {
      color: #333;
    }
}
</style>
<script>
export default {
    props: {
      text: String,
      uri: String,
    }
}
</script>