<script setup lang="ts">
import { Icon } from '@iconify/vue';
import { computed } from 'vue';

import Spinner from '../Spinner/Spinner.vue';

const props = defineProps({
  type: {
    type: String as () => 'button' | 'submit' | 'reset',
    default: 'button',
    validator: (value: string) => ['button', 'submit', 'reset'].includes(value),
  },
  variant: {
    type: String,
    default: 'default',
    validator: (value: string) =>
      [
        'default',
        'secondary',
        'destructive',
        'outline',
        'ghost',
        'link',
      ].includes(value),
  },
  size: {
    type: String,
    default: 'md',
    validator: (value: string) => ['sm', 'md', 'lg'].includes(value),
  },
  text: {
    type: String,
    default: 'Click Me',
  },
  fullWidth: Boolean,
  icon: {
    type: String,
    default: '',
  },
  loading: Boolean,
  disabled: Boolean,
  iconOnly: Boolean,
});

const emit = defineEmits(['click']);

const variantClass = computed(
  () =>
    ({
      default:
        'bg-primary text-primary-foreground hover:bg-primary/90 shadow-xs',
      secondary:
        'bg-secondary text-secondary-foreground hover:bg-secondary/80 shadow-xs',
      destructive:
        'bg-destructive hover:bg-destructive/90 text-white shadow-xs',
      outline:
        'border-border bg-background hover:bg-accent hover:text-accent-foreground border shadow-xs',
      ghost: 'hover:bg-accent hover:text-accent-foreground',
      link: 'text-primary underline-offset-4 hover:underline',
    })[props.variant],
);

const sizeClass = computed(
  () =>
    ({
      sm: 'h-8 gap-1.5 px-3',
      md: 'h-9 px-4 py-2',
      lg: 'h-10 px-6',
    })[props.size],
);
</script>

<template>
  <button
    :type="type"
    :disabled="disabled || loading"
    :class="[
      'inline-flex cursor-pointer items-center justify-center gap-2 rounded-md text-sm font-medium whitespace-nowrap transition-all disabled:cursor-not-allowed disabled:opacity-50',
      variantClass,
      sizeClass,
      fullWidth ? 'w-full' : '',
    ]"
    @click="(e: MouseEvent) => emit('click', e)"
  >
    <Spinner v-if="loading" />
    <Icon
      v-else-if="icon"
      :icon="icon"
      class="size-4"
    />
    <template v-if="!iconOnly">{{ text }}</template>
  </button>
</template>
