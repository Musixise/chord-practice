<template>
  <div class="modal-container">
    <div class="modal-bar">{{title}}</div>
    <div class="modal-content">
      <slot></slot>    
    </div>
  </div>
</template>
<script>
  export default {
    name: 'Modal',
    props: {
      title: String
    }
  } 
</script>
<style lang="scss" scoped>
  .modal-container{
    position: absolute;
    overflow: scroll;
    max-width: 100%;
  }
  .modal-bar{
    position:absolute;
    max-width: 100%;
    height: 20px;
    box-sizing: border-box;
    padding: 3px 0;
  }
  .modal-content{
    margin-top: 20px;
  }
</style>