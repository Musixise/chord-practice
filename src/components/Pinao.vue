<template>
  <Modal title="">
    <div class="pinao-container">
      <Key v-for="i in getKeyNumberList" :active="downKey.find(item => item === i) >= 0 " :number="i" :key="i"/>
    </div>
  </Modal>
</template>
<script>
import Modal from '@/components/Modal'
import Key from '@/components/Key'
import { mapGetters } from 'vuex'

export default {
  components: {
    Modal,
    Key,
  },
  props: {
    downKey: Array
  },
  computed: {
    getKeyNumberList: function(){
        const result = []
        for (let i = 0; i <= 120; i++){
            result.push(i)
        }
        return result;
    },
    ...mapGetters(['music/getKeyDown'])
  },
}
</script>
<style lang="scss" scoped>
.pinao-container{
    display: flex;
    flex-direction: row;   
    overflow: scroll;
    width: calc(45px * 70);
}
</style>