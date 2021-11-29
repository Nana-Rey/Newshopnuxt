<template>
  <div>
      <v-btn @click="changename()">種類を変える</v-btn>
  </div>
</template>

<script>
export default {
    components:{},
    data(){
        return{
            name:'りんご'
        }
    },
    watch:{
        name(){
            this.writeConsole()
        }
    },
    methods: {
        changename(){
            console.log('変更')
            this.name = 'オレンジ'
        },
        writeConsole(){
            console.log('変更を監視')
            console.log(this.name)
        }
    },
}
</script>

