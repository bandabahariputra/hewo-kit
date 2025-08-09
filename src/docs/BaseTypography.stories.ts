import type { Meta, StoryObj } from '@storybook/vue3-vite';

import BaseTypography from '../components/BaseTypography/BaseTypography.vue';

const meta = {
  component: BaseTypography,
  argTypes: {
    type: {
      options: [
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
      ],
      control: { type: 'select' },
    },
  },
  parameters: {
    slots: {
      default: {
        description: 'Base typography default slot',
      },
    },
  },
} satisfies Meta<typeof BaseTypography>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: (args) => ({
    components: { BaseTypography },
    setup() {
      return { args };
    },
    template:
      '<BaseTypography v-bind="args">The king, seeing how much happier his subjects were, realized the error of his ways and repealed the joke tax. </BaseTypography>',
  }),
  args: {},
};
