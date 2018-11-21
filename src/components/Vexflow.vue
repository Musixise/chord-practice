<template>
  <div class="container">
    <div :id="id"></div>  
  </div>
</template>
<script>
import Vex from "vexflow"
const { Flow } = Vex

export default {
  data(){
    return{
      id: 'boo'
    }
  },
  props: {
    notes: String
  },
  mounted() {
    var vf = new Flow.Factory({
      renderer: {elementId: this.id, width: 150, height: 130}
    });
    var score = vf.EasyScore();
    var system = vf.System();
    
    score.set({time:'2/4'})
    system.addStave({
      voices: [
        score.voice(score.notes(`(${this.notes})/h`, {stem: 'up'})),
      ]
    }).addClef('treble')
    // .addTimeSignature('2/4');


    vf.draw();
  },
}
</script>
<style lang="scss" scoped>
.container {
  background: #fff;
  overflow: hidden;
  marging: 10px;
  text-align: center;
  width: 230px;
  margin-top: 20px;
}

#container > div {
  height: 120px;
  white-space: nowrap;
}
</style>