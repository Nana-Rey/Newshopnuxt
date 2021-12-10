<template>
<div>
  <v-card
    :loading="loading"
    class="mx-auto my-12"
    max-width="374"
  >
    <template slot="progress">
      <v-progress-linear
        color="deep-purple"
        height="10"
        indeterminate
      ></v-progress-linear>
    </template>

    <v-img
      height="250"
      src="https://cdn.vuetifyjs.com/images/cards/cooking.png"
    ></v-img>

    <mycard>
    <v-card-title><template #nm>Badilico</template> </v-card-title>
    </mycard>
    <p>300円</p>
     <input type="number" value="1" min="1" max="10" />個
    <v-card-text>
      <v-row
        align="center"
        class="mx-0"
      >
        <v-rating
          :value="4.5"
          color="amber"
          dense
          half-increments
          readonly
          size="14"
        ></v-rating>
       
        <div class="grey--text ms-4">
          4.5 (413)
        </div>
        
      </v-row>
      <div></div>
      <div class="my-4 text-subtitle-1">
        $ • Italian, Cafe
      </div>
     
    </v-card-text>

    <v-divider class="mx-4"></v-divider>
  
      メモ欄
    <emitinput
    :value="value"
    @input="value = $event"
    >
    </emitinput>
   
    <p>表示:{{value}}</p>
   <div><Send @componentAlert="Alert" /></div>
    </v-card>
  </div>

</template>



<script>

   import mycard from '../components/Card.vue'
   import emitinput from '~/components/ProductInput.vue'
   import Send from '~/components/Send.vue'
  export default {
    components:{
      mycard,
      emitinput,
      Send
    },
    data: () => ({
      loading: false,
      selection: 1,
      value:'',
      number:''
    }),

    methods: {
      increase(){
            this.$store.commit('increase')
        },
        decrease(){
            this.$store.commit('decrease')
        },
        Alert:function(){
          alert("ご購入ありがとうございました。")
        }
    },
  }


</script>

