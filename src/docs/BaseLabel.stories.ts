import type { Meta, StoryObj } from '@storybook/vue3-vite';

import BaseLabel from '../components/BaseLabel/BaseLabel.vue';

const meta = {
  component: BaseLabel,
  parameters: {
    slots: {
      default: {
        description: 'Label',
      },
    },
  },
} satisfies Meta<typeof BaseLabel>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Basic: Story = {
  render: (args) => ({
    components: { BaseLabel },
    setup() {
      return { args };
    },
    template: '<BaseLabel>Label</BaseLabel>',
  }),
  args: {},
};
