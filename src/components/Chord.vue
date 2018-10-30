<template>
  <div class="chord-screen">
    <div class="chord-content">{{ ChordName || "..." }}</div>
  </div>
</template>
<script>
import chord from '@/common/chord.js'

export default {
  props: {
    downKey: Array
  },
  computed: {
    ChordName: function(){
       return chord(this.downKey)
    }
  }
}
</script>
<style lang="scss" scoped>
@keyframes typing {
  from { width: 0 }
}
.chord-screen{
  background: rgb(33, 35, 48);
  color: rgb(182, 200, 224);
  min-width: 100px;
  border-radius: 5px;
  text-align: center;
    .chord-content{
      line-height: 26px;
      width: 100%;
      overflow: hidden;
      white-space: nowrap;
      animation: typing .3s steps(11)
    }
}
</style>