<script setup lang="ts">
import { computed } from 'vue';

const props = defineProps({
  size: {
    type: String,
    default: 'md',
    validator: (value: string) => ['sm', 'md', 'lg'].includes(value),
  },
  id: {
    type: String,
    default: '',
  },
  name: {
    type: String,
    default: '',
  },
  disabled: Boolean,
  fullWidth: Boolean,
});

const value = defineModel({ type: String });

const sizeClass = computed(
  () =>
    ({
      sm: 'h-8 rounded px-2 text-sm',
      md: 'h-9 rounded-md px-2.5',
      lg: 'h-10 rounded-lg px-3',
    })[props.size],
);
</script>

<template>
  <div :class="['relative', props.fullWidth ? 'w-full' : 'w-fit']">
    <input
      :id="id"
      v-model="value"
      type="date"
      :name="name"
      :disabled="disabled"
      :class="[
        'placeholder:text-muted-foreground selection:bg-primary selection:text-primary-foreground border-input flex w-full min-w-0 appearance-none rounded-md border bg-transparent px-3 py-1 text-base shadow-xs transition-[color,box-shadow] outline-none disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm',
        sizeClass,
      ]"
    />
  </div>
</template>

<style scoped>
/* Optional: Hide Chrome's calendar icon */
input[type='date']::-webkit-calendar-picker-indicator {
  display: none;
  -webkit-appearance: none;
}
</style>
