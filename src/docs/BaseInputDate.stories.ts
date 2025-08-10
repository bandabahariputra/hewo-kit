import type { Meta, StoryObj } from '@storybook/vue3-vite';

import BaseInputDate from '../components/BaseInputDate/BaseInputDate.vue';

const meta = {
  component: BaseInputDate,
  argTypes: {
    size: {
      options: ['sm', 'md', 'lg'],
      control: { type: 'select' },
    },
  },
} satisfies Meta<typeof BaseInputDate>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Basic: Story = {
  render: (args) => ({
    components: { BaseInputDate },
    setup() {
      return { args };
    },
    template: '<BaseInputDate v-bind="args">',
  }),
  args: {},
};

export const Disabled: Story = {
  render: (args) => ({
    components: { BaseInputDate },
    setup() {
      return { args };
    },
    template: '<BaseInputDate v-bind="args">',
  }),
  args: {
    size: 'sm',
    disabled: true,
  },
};

export const FullWidth: Story = {
  render: (args) => ({
    components: { BaseInputDate },
    setup() {
      return { args };
    },
    template: '<BaseInputDate v-bind="args">',
  }),
  args: {
    size: 'sm',
    fullWidth: true,
  },
};
