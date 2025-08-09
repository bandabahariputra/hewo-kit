import type { Meta, StoryObj } from '@storybook/vue3-vite';

import BaseInputText from '../components/BaseInputText/BaseInputText.vue';

const meta = {
  component: BaseInputText,
  argTypes: {
    size: {
      options: ['sm', 'md', 'lg'],
      control: { type: 'select' },
    },
    width: {
      options: ['auto', 'fit', 'full'],
      control: { type: 'select' },
    },
  },
} satisfies Meta<typeof BaseInputText>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Basic: Story = {
  render: (args) => ({
    components: { BaseInputText },
    setup() {
      return { args };
    },
    template: '<BaseInputText v-bind="args">',
  }),
  args: {},
};

export const Placeholder: Story = {
  render: (args) => ({
    components: { BaseInputText },
    setup() {
      return { args };
    },
    template: '<BaseInputText v-bind="args">',
  }),
  args: {
    size: 'sm',
    placeholder: 'Email',
  },
};

export const Disabled: Story = {
  render: (args) => ({
    components: { BaseInputText },
    setup() {
      return { args };
    },
    template: '<BaseInputText v-bind="args">',
  }),
  args: {
    size: 'sm',
    placeholder: 'Email',
    disabled: true,
  },
};

export const FullWidth: Story = {
  render: (args) => ({
    components: { BaseInputText },
    setup() {
      return { args };
    },
    template: '<BaseInputText v-bind="args">',
  }),
  args: {
    size: 'sm',
    width: 'full',
    placeholder: 'Email',
  },
};
