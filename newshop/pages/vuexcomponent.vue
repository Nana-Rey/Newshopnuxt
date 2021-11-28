<template>
  <div class="container">
      <Vuexcomponent
      :counter="counter"
      @increase="increase"
      @decrease="decrease"
      />

  </div>
</template>

<script>
import Vuexcomponent from "~/components/vuexcomponent.vue";
export default {
    components: { 
        Vuexcomponent
         },
         data(){
             return{
                 counter: 0
             }
         },
         methods: {
             increase(){
                 this.conter++;
             },
             decrease (){
                 this.counter--;
             }
         },
}
</script>

