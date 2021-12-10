<template>
  <div class="component">
      <v-btn @click="$emit('componentAlert')">購入</v-btn>
      <p>{{ message }}</p>
  </div>
</template>

<script>
export default {

}
</script>