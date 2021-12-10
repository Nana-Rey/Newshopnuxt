<template>
  <div class="emitinput">
      <input
        placeholder="メモ"
       :value="value"
       @input="$emit('input',$event.target.value)"
       />
  </div>
</template>

<script>
export default {
    props: ['value']
}
</script>
