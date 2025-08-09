<script setup lang="ts">
import BaseCardContent from './BaseCardContent.vue';
import BaseCardDescription from './BaseCardDescription.vue';
import BaseCardFooter from './BaseCardFooter.vue';
import BaseCardHeader from './BaseCardHeader.vue';
import BaseCardTitle from './BaseCardTitle.vue';
</script>

<template>
  <div
    class="bg-card text-card-foreground border-border flex flex-col gap-6 rounded-xl border py-6 shadow-sm"
  >
    <BaseCardHeader v-if="$slots['card-title'] || $slots['card-description']">
      <BaseCardTitle v-if="$slots['card-title']">
        <slot name="card-title" />
      </BaseCardTitle>
      <BaseCardDescription v-if="$slots['card-description']">
        <slot name="card-description" />
      </BaseCardDescription>
    </BaseCardHeader>

    <BaseCardHeader v-if="$slots['card-header']">
      <slot name="card-header" />
    </BaseCardHeader>

    <BaseCardContent v-if="$slots['card-content']">
      <slot name="card-content" />
    </BaseCardContent>

    <BaseCardFooter v-if="$slots['card-footer']">
      <slot name="card-footer" />
    </BaseCardFooter>
  </div>
</template>
