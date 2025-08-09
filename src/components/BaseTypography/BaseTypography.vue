<script setup lang="ts">
import { computed } from 'vue';

const props = defineProps({
  type: {
    type: String,
    default: 'p',
    validator: (value: string) =>
      [
        'h1',
        'h2',
        'h3',
        'h4',
        'p',
        'blockquote',
        'inline-code',
        'lead',
        'large',
        'small',
        'muted',
      ].includes(value),
  },
});

const componentTag = computed(
  () =>
    ({
      h1: 'h1',
      h2: 'h2',
      h3: 'h3',
      h4: 'h4',
      p: 'p',
      blockquote: 'blockquote',
      'inline-code': 'code',
      lead: 'p',
      large: 'p',
      small: 'p',
      muted: 'p',
    })[props.type || 'p'],
);

const typeClass = computed(
  () =>
    ({
      h1: 'scroll-m-20 text-center text-4xl font-extrabold tracking-tight text-balance',
      h2: 'border-border scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0',
      h3: 'scroll-m-20 text-2xl font-semibold tracking-tight',
      h4: 'scroll-m-20 text-xl font-semibold tracking-tight',
      p: 'leading-7 [&:not(:first-child)]:mt-6',
      blockquote: 'border-border mt-6 border-l-2 pl-6 italic',
      'inline-code':
        'bg-muted relative rounded px-[0.3rem] py-[0.2rem] font-mono text-sm font-semibold',
      lead: 'text-muted-foreground text-xl',
      large: 'text-lg font-semibold',
      small: 'text-sm leading-none font-medium',
      muted: 'text-muted-foreground text-sm',
    })[props.type],
);
</script>

<template>
  <component
    :is="componentTag"
    :class="typeClass"
  >
    <slot />
  </component>
</template>
