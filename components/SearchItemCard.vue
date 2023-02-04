<script setup lang="ts">
import { defineProps } from "vue";

const props = defineProps({
  beer: {
    type: Object,
    required: true,
  },
});
</script>
<template>
  <div>
    <NuxtLink to="beer/[id]">{{ props.beer.name }}</NuxtLink>
  </div>
</template>
