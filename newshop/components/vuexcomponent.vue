<template>
  <div class="container">
      <v-btn @click="$emit('increase')">
          増加
      </v-btn>
      <v-btn @click="$emit('decrease')">
          減少
      </v-btn>
      {{ counter }}
  </div>
</template>

<script>
export default {
    props:{
        counter: Number
    },

}
</script>

<style>

</style>