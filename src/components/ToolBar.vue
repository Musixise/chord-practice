<template>
    <div class="toolbar-container">
      <slot></slot>
    </div>
</template>
<script>
export default {
  name: 'ToolBar',
  props: {
    msg: String
  }
}
</script>
<style lang="scss" scoped>
    $word-color: #f0f0f0;
    .toolbar-container{
        background: linear-gradient(rgb(184, 184, 184), rgb(173, 173, 173), rgb(165, 165, 165), rgb(144, 144, 144));
        padding: 10px;
        color: $word-color;
        box-sizing: border-box;
        height: 46px;
        display: flex;
        flex-direcion: row;
    }
</style>