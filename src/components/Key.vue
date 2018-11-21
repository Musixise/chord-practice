<template>
  <div :class="[isForce, isActive, getKeyType]" @mousedown="handleMouseDown" @mouseup="handleMouseUp" @mouseleave="handleMouseUp" >{{ getKeyName }}</div>
</template>
<script>
// 键盘的 key 从0 - 120
// musescore 从21 到 108
  export default {
    name: 'key',
      data(){
      return {
        isActive: '',
        isForce: '',
      }
    },
    props: {
      number: Number,
      handleKeyDown: Function,
      active: Boolean,
      force: Boolean,
    },
    mounted(){
      this.isForce = (this.force ? 'isForce' : '')
    },
    computed: {
      getKeyName: function(){
        const keynames = ['C',['Db', 'Db'], 'D',['Eb', 'Eb'],'E','F',['Gb', 'Gb'],'G',['Ab', 'Ab'],'A',['Bb','Bb'],'B','C']
        const direction = this.number - 60 >= 0 ? 'R' : 'L';
        const distance = Math.abs(this.number - 60)
        let result = null;
        let num = (this.number - (this.number % 12)) / 12 - 1;

        if(direction === 'L') {
          result = keynames[12 - (distance % 12)]
        }
        if(direction === 'R') {
          result = keynames[distance % 12]
        }
        // console.log('---------')
        // console.log(this.number)
        // console.log(result)
        // console.log('---------')
        
        if(result.length === 2) {
          result = result[Math.round(Math.random())]
        }
        return result + num;

      },
      getKeyType: function (){
        const C = 60
        const unit = 12
        const direction = 60 > this.number ? 'L' : 'R';
        const keyType = ['black-key', 'white-key-left', 'white-key-middle', 'white-key-right'];
        const getDistanceOneUnit =  Math.abs(this.number - C) % unit;   
        /**
        *   0  ----- 黑键
        *   1  ----- 白左键
        *   2  ----- 白中键
        *   3  ----- 白右键
         */
        const data = {
          'L': [1, 3, 0, 2, 0, 2, 0, 1, 3, 0, 2, 0, 1],
          'R': [1, 0, 2, 0, 3, 1, 0, 2, 0, 2, 0, 3]
        }
        
        return  keyType[data[direction][getDistanceOneUnit]]
      },
      getName: function (){
        return this.number
      }
    },
    watch: {
      active: function(bool) {
        this.isActive = (bool ? 'isActive' : '')
      },
      force: function(bool) {
        this.isForce = (bool ? 'isForce' : '')
      },
    },
    methods: {
      handleMouseDown: function(){
        this.isActive = 'isActive'
      },
      handleMouseUp: function(){
        this.isActive = ""
      }
    }
  }
</script>
<style lang="scss" scoped>
  .general-white-key {
    width: 45px;
    background: #f0f0f0;
    height: 230px;
    border: 1px solid #aaa;
    color: #999;
    text-align: center;
    line-height: 420px;
    cursor: pointer;
    user-select: none;
  }
  .white-key {
    @extend .general-white-key;
  }
  .black-key {
    width: 30px;
    height: 120px;
    margin-left: -15px;
    background: -webkit-gradient(linear, left top, left bottom, from(#222), to(#666));
    z-index: 1000;
    margin-right: -15px;
    text-align: center;
    line-height: 40px;
    cursor: pointer;
    border: 0 solid #aaa;
    box-sizing: border-box;
    user-select: none;
    border-bottom: 1px solid #444;
    box-shadow: 0 -4px 5px #444 inset;
    border-radius: 0 0 4px 4px;
    font-size: 12px;
  }
  .white-key-left {
    @extend .general-white-key;
  }
  .white-key-middle {
    @extend .general-white-key;
  }
  .white-key-right {
    @extend .general-white-key;
    border-right: 0;
  }
  .black-key.isActive{
    background: -webkit-gradient(linear, left top, left bottom, from(#222), to(#aaa));
    border-bottom: 1px solid #999;
  }
  .isActive{
    background: rgb(212, 211, 210) !important;
    box-shadow: 0 0 0 #fff;
    border-bottom: 1px solid #777;
    color: #999 !important;
  }
  .isForce{
    background: #4199ee;
    box-shadow: 0 0 0 #fff;
    color: #fff;
    border-bottom: 1px solid #777;
  }
</style>