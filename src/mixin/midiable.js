import midi from '@/common/midi'

export default {
    created: function () {
        this.hello()
      },
      methods: {
        hello: function (){
          midi(this.setKey)
          console.log('hello from mixin!');
        },
        setKey(key){
            console.log('setkey: ', key)
        }
      }
}