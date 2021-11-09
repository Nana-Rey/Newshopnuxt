<template>
  <div class="container">
      <Emit2 @componentAlert="Alert" />
      <Emit2 :message="myMessage"></Emit2>
  </div>
</template>

<script>
import Emit2 from "~/components/Emit2.vue"
export default {
    data(){
        return{
            myMessage:'Hello'
        }
    },
    components: { 
        Emit2
        },
    methods: {
        Alert:function () {
            alert("Hello!!!!")
        }
    },
    
}
</script>