<template>
  <div class="question-container">
    <h4>和弦介绍</h4>
    <article>
        <p>大三和弦	大三度（4半音）	纯五度（7半音）	</p>	
        <p>小三和弦	小三度（3半音）	纯五度（7半音）</p>
        <p>增三和弦	大三度（4半音）	增五度（8半音）	</p>	
        <p>减三和弦	小三度（3半音）	减五度（6半音）	</p>
    </article>
    <div class="question">
    <span v-for="i in renderQuestion">
      <span v-if="typeof i === 'object'">
       <span v-if="i.type === 'chord'">
        <b>{{ i.content }}</b>
       </span>
       <span v-if="i.type === 'notes'">
        <Vexflow :notes="i.content" />
       </span>
      </span>
      <span v-else>{{ i }}</span>
    </span>
    </div>
  </div>
</template>
<script>
import checkQuestion from '@/common/checkQuestion.js'
import Vexflow from '@/components/Vexflow'
import MarkdownIt from 'markdown-it'

export default {
  props: {
    text: String
  },
  components:{
    Vexflow,
  },
  computed: {
    renderQuestion: function(){
       let md = new MarkdownIt()
       return md.render('# markdown-it rulezz!')
    //   return checkQuestion(this.text)
    }
  }
}
</script>
<style lang="scss" scoped>
.question-container{
  box-sizing: border-box;
  padding: 20px;
  color: #333;
  height: 100%;
  overflow: scroll;
  width: 300px;
  background: rgb(238, 241, 242);
}
h4{
    margin-bottom: 20px;
}
article{
  box-sizing: border-box;
  font-size: 12px;
  color: #1f2426;
  line-height: 1.6;
  margin-bottom: 20px;
}
.question{
  box-sizing: border-box;
}
</style>