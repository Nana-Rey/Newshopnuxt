<template>
  <div class="component">
      <button @click="$emit('componentAlert')">ボタン</button>
      <p>{{ message }}</p>
  </div>
</template>

<script>
export default {
   props: ['message']
}
</script>

