<template>
  <div>
    <v-card>
    <emitinput
    :value="value"
    @input="value = $event"
    >
    </emitinput>
    </v-card>
    <p>表示:{{value}}</p>
  </div>
</template>

<script>
import emitinput from "~/components/Emitinput.vue"
export default {
  components:{
    emitinput
  },
  data(){
    return{
      value: ''
    }
  },
}
</script>

