<template>
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
      <div class="container">
      <v-btn @click="increase">+</v-btn>
       {{ $store.state.counter }}個
      <v-btn @click="decrease">-</v-btn>
     
  </div>

    </v-card-text>

    <v-divider class="mx-4"></v-divider>

    <v-card-title>Tonight's availability</v-card-title>

    <v-card-text>
      <v-chip-group
        v-model="selection"
        active-class="deep-purple accent-4 white--text"
        column
      >
        <v-chip>5:30PM</v-chip>

        <v-chip>7:30PM</v-chip>

        <v-chip>8:00PM</v-chip>

        <v-chip>9:00PM</v-chip>
      </v-chip-group>
    </v-card-text>

    <v-card-actions>
      <v-btn
        color="deep-purple lighten-2"
        text
        @click="reserve"
      >
        Reserve
      </v-btn>
    </v-card-actions>
    <div>
    <v-card>
      メモ欄
    <emitinput
    :value="value"
    @input="value = $event"
    >
    </emitinput>
    </v-card>
    <p>表示:{{value}}</p>
  </div>
  </v-card>

</template>

<script>

   import mycard from '../components/Card.vue'
   import emitinput from '~/components/ProductInput.vue'
  
  export default {
    components:{
      mycard,
      emitinput,

    },
    data: () => ({
      loading: false,
      selection: 1,
      value:''
      // number:""
    }),

    methods: {
      reserve () {
        this.loading = true

        setTimeout(() => (this.loading = false), 2000)
      },
      increase(){
            this.$store.commit('increase')
        },
        decrease(){
            this.$store.commit('decrease')
        },
    },
  }


</script>

