<script setup lang="ts">
import { Icon } from '@iconify/vue';
import { computed } from 'vue';

type SelectOption = {
  id: string;
  value: string;
};

const props = defineProps({
  options: {
    type: Array,
    required: true,
    validator: (value) => {
      return (
        Array.isArray(value) &&
        value.every(
          (item) =>
            typeof item.id === 'string' && typeof item.value === 'string',
        )
      );
    },
  },
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
  placeholder: {
    type: String,
    default: '',
  },
  disabled: Boolean,
  fullWidth: Boolean,
});

const options = props.options as SelectOption[];

const value = defineModel({ type: String });

const sizeClass = computed(
  () =>
    ({
      sm: 'h-8 rounded pr-10 pl-2 text-sm',
      md: 'h-9 rounded-md pr-10 pl-2.5',
      lg: 'h-10 rounded-lg pr-10 pl-3',
    })[props.size],
);

const chevronSize = computed(
  () =>
    ({
      sm: 'absolute top-2.5 right-2 size-3',
      md: 'absolute top-2.5 right-2.5 size-4',
      lg: 'absolute top-3 right-3 size-4',
    })[props.size],
);
</script>

<template>
  <div :class="['relative', props.fullWidth ? 'w-full' : 'w-fit']">
    <select
      :id="id"
      v-model="value"
      :name="name"
      :disabled="disabled"
      :class="[
        'placeholder:text-muted-foreground selection:bg-primary selection:text-primary-foreground border-input flex min-w-0 appearance-none rounded-md border bg-transparent px-3 py-1 text-base shadow-xs transition-[color,box-shadow] outline-none disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm',
        sizeClass,
        fullWidth ? 'w-full' : 'w-auto',
      ]"
    >
      <option
        v-if="!!placeholder"
        selected
        disabled
        value=""
      >
        {{ placeholder }}
      </option>
      <option
        v-for="option in options"
        :key="option.id"
        :value="option.id"
      >
        {{ option.value }}
      </option>
    </select>
    <Icon
      icon="tabler:chevron-down"
      :class="[chevronSize]"
    />
  </div>
</template>
