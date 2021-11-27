<template>
  <div>
      <input  
      :value="value"
      :type="number"
      :placeholder="placeholder"
      @input="updateNumber">
  </div>
</template>

<script>
export default {
    name:'InputNumber',
    prop:{
        value:{
            type: String, 
            required: true
        },
        type:{
            type: String,
            required: true
        },
        name:{
            type: String,
            required: true
        },
        placeholder:{
            type: String,
            required: false
        },
    methods: {
        updateNumber: function(e){
            this.$emit("input", e.target.value);
        }
    },
    }
}
</script>

