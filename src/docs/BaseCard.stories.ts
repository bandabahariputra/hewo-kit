import type { Meta, StoryObj } from '@storybook/vue3-vite';

import BaseCard from '../components/BaseCard/BaseCard.vue';

const meta = {
  component: BaseCard,
  parameters: {
    slots: {
      'card-title': {
        description: 'Base card title slot',
      },
      'card-description': {
        description: 'Base card description slot',
      },
      'card-header': {
        description: 'Base card header slot',
      },
      'card-content': {
        description: 'Base card content slot',
      },
      'card-footer': {
        description: 'Base card footer slot',
      },
    },
  },
} satisfies Meta<typeof BaseCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Basic: Story = {
  render: (args) => ({
    components: { BaseCard },
    setup() {
      return { args };
    },
    template: `
      <BaseCard>
        <template #card-title> Card Title </template>
        <template #card-description> Card Description </template>
        <template #card-content> Card Content </template>
        <template #card-footer> Card Footer </template>
      </BaseCard>
    `,
  }),
  args: {},
};
