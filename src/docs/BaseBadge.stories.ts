import type { Meta, StoryObj } from '@storybook/vue3-vite';

import BaseBadge from '../components/BaseBadge/BaseBadge.vue';

const meta = {
  component: BaseBadge,
  argTypes: {
    variant: {
      options: ['default', 'secondary', 'destructive', 'outline'],
      control: { type: 'select' },
    },
  },
  parameters: {
    slots: {
      default: {
        description: 'Base alert default slot',
      },
    },
  },
} satisfies Meta<typeof BaseBadge>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: (args) => ({
    components: { BaseBadge },
    setup() {
      return { args };
    },
    template: '<BaseBadge v-bind="args">Badge</BaseBadge>',
  }),
  args: {},
};

export const Secondary: Story = {
  render: (args) => ({
    components: { BaseBadge },
    setup() {
      return { args };
    },
    template: '<BaseBadge v-bind="args">Secondary</BaseBadge>',
  }),
  args: {
    variant: 'secondary',
  },
};

export const Destructive: Story = {
  render: (args) => ({
    components: { BaseBadge },
    setup() {
      return { args };
    },
    template: '<BaseBadge v-bind="args">Destructive</BaseBadge>',
  }),
  args: {
    variant: 'destructive',
  },
};

export const Outline: Story = {
  render: (args) => ({
    components: { BaseBadge },
    setup() {
      return { args };
    },
    template: '<BaseBadge v-bind="args">Outline</BaseBadge>',
  }),
  args: {
    variant: 'outline',
  },
};
