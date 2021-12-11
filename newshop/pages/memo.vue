<template>
  <div>
      <ul>
          <li v-for="memo in memos" :key="memo.id">
              <input type="checkbox" :checked="memo.done">
              {{memo.name}}
          </li>
      </ul>
  </div>
</template>

<script>
export default {
    computed:{
        memos(){ 
            return this.$store.state.tasks
        },
    },
}
</script>

