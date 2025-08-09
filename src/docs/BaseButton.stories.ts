import type { Meta, StoryObj } from '@storybook/vue3-vite';
import { fn } from 'storybook/test';

import BaseButton from '../components/BaseButton/BaseButton.vue';

const meta = {
  component: BaseButton,
  argTypes: {
    type: {
      options: ['button', 'submit', 'reset'],
      control: { type: 'select' },
    },
    variant: {
      options: [
        'default',
        'secondary',
        'destructive',
        'outline',
        'ghost',
        'link',
      ],
      control: { type: 'select' },
    },
    size: {
      options: ['sm', 'md', 'lg'],
      control: { type: 'select' },
    },
  },
} satisfies Meta<typeof BaseButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: (args) => ({
    components: { BaseButton },
    setup() {
      return { args };
    },
    template: '<BaseButton v-bind="args" />',
  }),
  args: {},
};

export const Secondary: Story = {
  render: (args) => ({
    components: { BaseButton },
    setup() {
      return { args };
    },
    template: '<BaseButton v-bind="args" />',
  }),
  args: {
    variant: 'secondary',
  },
};

export const Destructive: Story = {
  render: (args) => ({
    components: { BaseButton },
    setup() {
      return { args };
    },
    template: '<BaseButton v-bind="args" />',
  }),
  args: {
    variant: 'destructive',
  },
};

export const Outline: Story = {
  render: (args) => ({
    components: { BaseButton },
    setup() {
      return { args };
    },
    template: '<BaseButton v-bind="args" />',
  }),
  args: {
    variant: 'outline',
  },
};

export const Ghost: Story = {
  render: (args) => ({
    components: { BaseButton },
    setup() {
      return { args };
    },
    template: '<BaseButton v-bind="args" />',
  }),
  args: {
    variant: 'ghost',
  },
};

export const Link: Story = {
  render: (args) => ({
    components: { BaseButton },
    setup() {
      return { args };
    },
    template: '<BaseButton v-bind="args" />',
  }),
  args: {
    variant: 'link',
  },
};

export const FullWidth: Story = {
  render: (args) => ({
    components: { BaseButton },
    setup() {
      return { args };
    },
    template: '<BaseButton v-bind="args" />',
  }),
  args: {
    fullWidth: true,
  },
};

export const SmallButton: Story = {
  render: (args) => ({
    components: { BaseButton },
    setup() {
      return { args };
    },
    template: '<BaseButton v-bind="args" />',
  }),
  args: {
    size: 'sm',
  },
};

export const WithIcon: Story = {
  render: (args) => ({
    components: { BaseButton },
    setup() {
      return { args };
    },
    template: '<BaseButton v-bind="args" />',
  }),
  args: {
    size: 'sm',
    variant: 'outline',
    icon: 'mdi:source-branch',
    text: 'New Branch',
  },
};

export const IconOnly: Story = {
  render: (args) => ({
    components: { BaseButton },
    setup() {
      return { args };
    },
    template: '<BaseButton v-bind="args" />',
  }),
  args: {
    size: 'sm',
    variant: 'outline',
    icon: 'mdi:chevron-right',
    iconOnly: true,
  },
};

export const Loading: Story = {
  render: (args) => ({
    components: { BaseButton },
    setup() {
      return { args };
    },
    template: '<BaseButton v-bind="args" />',
  }),
  args: {
    size: 'sm',
    text: 'Login',
    loading: true,
  },
};

export const Disabled: Story = {
  render: (args) => ({
    components: { BaseButton },
    setup() {
      return { args };
    },
    template: '<BaseButton v-bind="args" />',
  }),
  args: {
    size: 'sm',
    text: 'Save',
    disabled: true,
  },
};

export const HandleClick: Story = {
  render: (args) => ({
    components: { BaseButton },
    setup() {
      return { args };
    },
    template: '<BaseButton v-bind="args" @click="onClick" />',
  }),
  args: {
    size: 'sm',
    onClick: fn(),
  },
};
