<script setup lang="ts">
import { computed } from 'vue';

const props = defineProps({
  variant: {
    type: String,
    default: 'default',
    validator: (value: string) =>
      ['default', 'secondary', 'destructive', 'outline'].includes(value),
  },
});

const variantClass = computed(
  () =>
    ({
      default: 'bg-primary text-primary-foreground border-transparent',
      secondary: 'bg-secondary text-secondary-foreground border-transparent',
      destructive: 'bg-destructive border-transparent text-white',
      outline: 'text-foreground',
    })[props.variant],
);
</script>

<template>
  <span
    :class="[
      'border-border inline-flex w-fit shrink-0 items-center justify-center gap-1 overflow-hidden rounded-md border px-2 py-0.5 text-xs font-medium whitespace-nowrap transition-[color,box-shadow] [&>svg]:pointer-events-none [&>svg]:size-3',
      variantClass,
    ]"
  >
    <slot />
  </span>
</template>
