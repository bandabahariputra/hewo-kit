import type { Meta, StoryObj } from '@storybook/vue3-vite';

import Spinner from '../components/Spinner/Spinner.vue';

const meta = {
  component: Spinner,
  argTypes: {
    color: {
      options: ['neutral'],
      control: { type: 'select' },
    },
  },
} satisfies Meta<typeof Spinner>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: (args) => ({
    components: { Spinner },
    setup() {
      return { args };
    },
    template: '<Spinner v-bind="args" />',
  }),
  args: {},
};
