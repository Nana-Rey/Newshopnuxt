<template>
  <div class="index">
     <Slot2></Slot2>
     <Slot2>
         <template v-slot:nm>りんご</template>
     </Slot2>
     <Slot2>
         <template v-slot:add>森</template>
     </Slot2>
  </div>
</template>

<script>
import Slot2 from '../components/slot2.vue'

export default {
    components: { Slot2}
}
</script>

