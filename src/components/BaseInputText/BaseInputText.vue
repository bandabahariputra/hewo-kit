<script setup lang="ts">
import { computed } from 'vue';

const props = defineProps({
  size: {
    type: String,
    default: 'md',
    validator: (value: string) => ['sm', 'md', 'lg'].includes(value),
  },
  width: {
    type: String,
    default: 'auto',
    validator: (value: string) => ['auto', 'fit', 'full'].includes(value),
  },
  id: {
    type: String,
    default: '',
  },
  name: {
    type: String,
    default: '',
  },
  placeholder: {
    type: String,
    default: '',
  },
  disabled: Boolean,
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

const widthClass = computed(
  () =>
    ({
      auto: '',
      fit: 'w-fit',
      full: 'w-full',
    })[props.width],
);
</script>

<template>
  <input
    :id="id"
    v-model="value"
    type="text"
    :name="name"
    :placeholder="placeholder"
    :disabled="disabled"
    :class="[
      'placeholder:text-muted-foreground selection:bg-primary selection:text-primary-foreground border-input flex min-w-0 rounded-md border bg-transparent px-3 py-1 text-base shadow-xs transition-[color,box-shadow] outline-none disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm',
      sizeClass,
      widthClass,
    ]"
  />
</template>
