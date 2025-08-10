import type { Meta, StoryObj } from '@storybook/vue3-vite';

import BaseSelect from '../components/BaseSelect/BaseSelect.vue';

const meta = {
  component: BaseSelect,
  argTypes: {
    size: {
      options: ['sm', 'md', 'lg'],
      control: { type: 'select' },
    },
  },
  args: {
    options: [],
  },
} satisfies Meta<typeof BaseSelect>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Basic: Story = {
  render: (args) => ({
    components: { BaseSelect },
    setup() {
      return { args };
    },
    template: '<BaseSelect v-bind="args">',
  }),
  args: {
    options: [
      { id: '1', value: 'Option 1' },
      { id: '2', value: 'Option 2' },
      { id: '3', value: 'Option 3' },
    ],
  },
};

export const Placeholder: Story = {
  render: (args) => ({
    components: { BaseSelect },
    setup() {
      return { args };
    },
    template: '<BaseSelect v-bind="args">',
  }),
  args: {
    size: 'sm',
    placeholder: 'Choose options...',
    options: [
      { id: '1', value: 'Option 1' },
      { id: '2', value: 'Option 2' },
      { id: '3', value: 'Option 3' },
    ],
  },
};

export const Disabled: Story = {
  render: (args) => ({
    components: { BaseSelect },
    setup() {
      return { args };
    },
    template: '<BaseSelect v-bind="args">',
  }),
  args: {
    size: 'sm',
    disabled: true,
    options: [
      { id: '1', value: 'Option 1' },
      { id: '2', value: 'Option 2' },
      { id: '3', value: 'Option 3' },
    ],
  },
};

export const FullWidth: Story = {
  render: (args) => ({
    components: { BaseSelect },
    setup() {
      return { args };
    },
    template: '<BaseSelect v-bind="args">',
  }),
  args: {
    size: 'sm',
    fullWidth: true,
    placeholder: 'Choose options...',
    options: [
      { id: '1', value: 'Option 1' },
      { id: '2', value: 'Option 2' },
      { id: '3', value: 'Option 3' },
    ],
  },
};
