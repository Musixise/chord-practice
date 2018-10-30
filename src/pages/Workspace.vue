<template>
  <div class="workspace">
    <ToolBar msg="hello">
      <Chord style="margin: 0 auto" :downKey="downKey"/>
    </ToolBar>
    <Pinao style="position:absolute; bottom:10px" :downKey="downKey"/>
  </div>
</template>
<script>
import ToolBar from '@/components/ToolBar';
import Pinao from '@/components/Pinao';
import Chord from '@/components/Chord'

import { mapState, mapGetters, mapActions } from 'vuex';

export default {
  name: 'Workspace',
  data(){
      return {
          msg: 'hello'
      }
    },
  components: {
      ToolBar,
      Pinao,
      Chord,
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
      background: rgb(66, 66, 66);
      width: 100%;
      height: 100%;
      position: absolute;
      box-sizing: border-box;
      overflow: hidden;
      color: $text-color;
  }
</style>