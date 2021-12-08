<template>
  <div class="component">
      <v-btn @click="$emit('componentAlert')">ボタン</v-btn>
      <p>{{ message }}</p>
  </div>
</template>

<script>
export default {

}
</script>

