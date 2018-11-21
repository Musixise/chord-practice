<template>
  <div class="workspace">
    <div class="answser"> 
    <ToolBar msg="hello">
      <Chord style="margin: 0 auto" :downKey="downKey"/>
    </ToolBar>
    <Progress :status="[1, 0, 1, 1, 1, 1, -1, -1, -1, -1]" :current="3" />
    <Pinao style="position:absolute; bottom:10px" :downKey="downKey" :forceKey="[1, 3, 5]"/>
    </div>
  </div>
</template>
<script>
import ToolBar from '@/components/ToolBar';
import Pinao from '@/components/Pinao';
import Chord from '@/components/Chord'
import Progress from '@/components/Progress'
import Question from '@/components/Question'

import { mapState, mapGetters, mapActions } from 'vuex';

export default {
  name: 'Workspace',
  data() {
    return {
      msg: 'hello'
    }
  },
  components: {
      ToolBar,
      Pinao,
      Chord,
      Progress,
      Question,
  },
  created() {
    this.$MIDI.$on('midi-input', event => {
      this.setKey(event)
    })
  },
  methods: {
    ...mapActions({
      setKey: 'music/setKey'
    })
  },
  computed: {
    device: function(){
      return this.$MIDI.activeDevices
    },
    downKey: function(){
      return this.count.map(item => item[1])
    },
    ...mapState ({
      count: state => state.music.keyList
    }),
    ...mapGetters ({
      addCount: 'music/addOne'
    })
  },
  mounted() {
    this.$store.commit({
      type: 'music/addCount',
      number : 10
    })
  },
}
</script>
<style lang="scss" scoped>
  $text-color: #f0f0f0;
  .workspace{
      background: rgb(35, 36, 37);
      width: 100%;
      height: 100%;
      position: absolute;
      box-sizing: border-box;
      overflow: hidden;
      color: $text-color;
      display: flex;
      flex-direction: row;
      .answser{
        width: 100%;
      }
  }
</style>