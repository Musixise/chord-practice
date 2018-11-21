<template>
  <ul class="progress-bar-container">
  <li 
    v-for="(i, index) in status" 
    :class="[getClass(i), index === current ? `current`: '']" 
    :key="index" 
    @click="handleClick(index)"
  />
  </ul>
</template>
<script>
export default {
  
  props: {
    status: Array,
    current: Number,
  },   
  completed: {

  }, 
  methods:{
    handleClick: function(i){
      
    },
    getClass: function(status){
      if (status === -1) return null;
      const statusList = ['error', 'completed']
      return statusList[status]
    }
  }
}
</script>
<style lang="scss" scoped>

$border-color: #666;
$completed-color: #41ee99;
$current-color: #ee9941;
$primary-color: #999;
$error-color: #ff1441;

.progress-bar-container {
    width: 100%;
    height: 10px;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    list-style: none;
    li {
      cursor: pointer;
      background: $primary-color;
      display: block;
      height: 100%;
      flex: 1;
      box-sizing: border-box;
      border: 1px solid $border-color;
      border-right: none;
      &:last-of-type {
        border-right: 1px solid $border-color;
      }
      &.current{
        background: $current-color !important;
      }
      &.completed{
        background: $completed-color;
      }
      &.error{
        background: $error-color;
      }
    }
}
</style>