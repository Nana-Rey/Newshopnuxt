<template>
  <div class="container">
      <v-btn @click="increase">増加</v-btn>
      <v-btn @click="decrease">減少</v-btn>
      {{ $store.state.counter }}
  </div>
</template>

<script>
export default {
    methods: {
        increase(){
            this.$store.commit('increase')
        },
        decrease(){
            this.$store.commit('decrease')
        },
    },
}
</script>

