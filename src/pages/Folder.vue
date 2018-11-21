<template>
  <div class="folder">
  <div class="folder-bar"><h3>控制台-课程选择</h3></div>
  <div class="folder-container">
  <div class="menu-container">
    <el-tree :data="data" :props="defaultProps" @node-click="handleNodeClick"></el-tree>
  </div>
  <div class="content-container">
    <File text="课件" uri="/workspace" />
    <File text="练习" uri="/workspace" />
    <File text="下载" uri="/workspace" />
    <File text="下载" uri="/workspace" />
    <File text="下载" uri="/workspace" />
    <File text="下载" uri="/workspace" />
    <File text="下载" uri="/workspace" />
    <File text="下载" uri="/workspace" />
    <File text="下载" uri="/workspace" />
  </div>
  </div>
  </div>
</template>
<script>
import File from '@/components/File'

export default {
data() {
  return {
    data: [{
      label: '音乐理论练习[3]',
      children: [{
        label: '三十二分音符',
      },{
        label: '四个升号或四个降号',
      },{
        label: '两条以上的加线',
      }]
    }],
    defaultProps: {
      children: 'children',
      label: 'label'
    }
  };
},
components: {
  File,
},
methods: {
  handleNodeClick: function(item) {
    console.log(item) // eslint-disable-line
  },
}
}
</script>
<style lang="scss">
.folder {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  .folder-bar {
    height: 64px;
    line-height: 64px;
    background: rgb(245, 245, 245);
    box-sizing: border-box; 
    padding: 0 20px;
    color: #666;
    border-bottom: 1px solid rgb(205, 205, 205);
  }
}
.folder-container{
  width: 100%;
  height: 100%;
  overflow-y: scroll;
  display: flex;
  flex-direction: row;
  background: rgb(234, 234, 234); 
  .menu-container{
    background: rgb(237, 237, 237);
    box-sizing: border-box;
    height: 100%;
    overflow-y: scroll;
    transition: .3s;
    box-shadow: 0 0 2px rgb(185, 185, 182);
    flex: 1;
  }
  .menu {
    padding-top: 15px;
  }
  .content-container {
    flex: 5;
    display: grid;
    background: rgb(234, 234, 234) url('../assets/music.svg') no-repeat center center / 10%;
    grid-template-columns: repeat(6, 1fr);
    grid-row-gap: 40px;
    grid-column-gap: 100px;
    grid-template-rows: auto auto auto auto auto;
    box-sizing: border-box;
    padding: 30px;
  }
}

</style>