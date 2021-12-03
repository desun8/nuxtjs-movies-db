<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  props: {
    name: {
      type: String,
      required: true
    },
    value: {
      type: String,
      required: true
    }
  }
})
</script>

<template>
  <div class="flex">
    <dt class="mr-1 font-semibold">{{ name }}:</dt>
    <dd>{{ value }}</dd>
  </div>
</template>
