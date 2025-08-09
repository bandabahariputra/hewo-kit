import type { Meta, StoryObj } from '@storybook/vue3-vite';

import BaseAlert from '../components/BaseAlert/BaseAlert.vue';

const meta = {
  component: BaseAlert,
  argTypes: {
    variant: {
      options: ['default', 'destructive'],
      control: { type: 'select' },
    },
  },
  parameters: {
    slots: {
      'alert-title': {
        description: 'Base alert title slot',
      },
      'alert-description': {
        description: 'Base alert description slot',
      },
    },
  },
} satisfies Meta<typeof BaseAlert>;

export default meta;
type Story = StoryObj<typeof meta>;

export const SimpleAlert: Story = {
  render: (args) => ({
    components: { BaseAlert },
    setup() {
      return { args };
    },
    template: `
      <BaseAlert v-bind="args">
        <template #alert-title>This Alert has a title. No description and icon.</template>
      </BaseAlert>
    `,
  }),
  args: {},
};

export const WithDescriptionAndIcon: Story = {
  render: (args) => ({
    components: { BaseAlert },
    setup() {
      return { args };
    },
    template: `
      <BaseAlert v-bind="args">
        <template #alert-title>Success! Your changes have been saved</template>
        <template #alert-description>This is an alert with icon, title and description.</template>
      </BaseAlert>
    `,
  }),
  args: {
    icon: 'mdi:check-circle-outline',
  },
};

export const Destructive: Story = {
  render: (args) => ({
    components: { BaseAlert },
    setup() {
      return { args };
    },
    template: `
      <BaseAlert v-bind="args">
        <template #alert-title>Unable to process your payment.</template>
        <template #alert-description>
          <p>Please verify your billing information and try again.</p>
          <ul className="list-inside list-disc text-sm">
            <li>Check your card details</li>
            <li>Ensure sufficient funds</li>
            <li>Verify billing address</li>
          </ul>
        </template>
      </BaseAlert>
    `,
  }),
  args: {
    variant: 'destructive',
    icon: 'mdi:information-outline',
  },
};
