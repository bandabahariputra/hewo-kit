<script setup lang="ts">
defineProps({
  htmlFor: {
    type: String,
    default: '',
  },
});
</script>

<template>
  <label
    :for="htmlFor"
    class="flex items-center gap-2 text-sm leading-none font-medium select-none"
  >
    <slot />
  </label>
</template>
