<script setup lang="ts">
import { Icon } from '@iconify/vue';
import { computed } from 'vue';

import BaseAlertDescription from './BaseAlertDescription.vue';
import BaseAlertTitle from './BaseAlertTitle.vue';

const props = defineProps({
  variant: {
    type: String,
    default: 'default',
    validator: (value: string) => ['default', 'destructive'].includes(value),
  },
  icon: {
    type: String,
    default: '',
  },
});

const variantClass = computed(
  () =>
    ({
      default: 'bg-card text-card-foreground',
      destructive:
        'bg-card text-destructive *:data-[slot=alert-description]:text-destructive/90',
    })[props.variant],
);
</script>

<template>
  <div
    role="alert"
    :class="[
      'border-border relative grid w-full grid-cols-[0_1fr] items-start gap-y-0.5 rounded-lg border px-4 py-3 text-sm has-[>svg]:gap-x-6 [&>svg]:size-4 [&>svg]:translate-y-0.5',
      variantClass,
    ]"
  >
    <Icon
      v-if="!!icon"
      :icon="icon"
    />

    <BaseAlertTitle v-if="$slots['alert-title']">
      <slot name="alert-title" />
    </BaseAlertTitle>

    <BaseAlertDescription v-if="$slots['alert-description']">
      <slot name="alert-description" />
    </BaseAlertDescription>
  </div>
</template>
