import type { Meta, StoryObj } from '@storybook/react';
import { InputField } from './InputField';

const meta: Meta<typeof InputField> = {
  title: 'Forms/InputField',
  component: InputField,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component:
          'A flexible, accessible text input with label, helper, error, variants (filled/outlined/ghost), sizes, and optional clear + password toggle.'
      }
    }
  },
  argTypes: {
    variant: { control: 'inline-radio', options: ['filled', 'outlined', 'ghost'] },
    size: { control: 'inline-radio', options: ['sm', 'md', 'lg'] }
  }
};
export default meta;

type Story = StoryObj<typeof InputField>;

export const Playground: Story = {
  args: {
    label: 'Email',
    placeholder: 'you@company.com',
    helperText: 'We never share your email.',
    variant: 'outlined',
    size: 'md',
    clearable: true
  }
};

export const States: Story = {
  render: () => (
    <div style={{ display: 'grid', gap: 16, width: 360 }}>
      <InputField label="Default" placeholder="Type..." />
      <InputField label="Invalid" invalid errorMessage="This field is required." />
      <InputField label="Disabled" placeholder="Disabled" disabled />
      <InputField label="Loading" loading helperText="Validating..." />
      <InputField
        label="Password"
        inputProps={{ type: 'password' }}
        passwordToggle
        placeholder="••••••••"
      />
      <InputField label="Ghost" variant="ghost" placeholder="Ghost variant" clearable />
      <InputField label="Filled" variant="filled" placeholder="Filled variant" />
    </div>
  )
};

export const Sizes: Story = {
  render: () => (
    <div style={{ display: 'grid', gap: 16, width: 360 }}>
      <InputField label="Small" size="sm" placeholder="Small" />
      <InputField label="Medium" size="md" placeholder="Medium" />
      <InputField label="Large" size="lg" placeholder="Large" />
    </div>
  )
};

/* Accessibility notes (docs tab):
- <label htmlFor> associates with input; uses React.useId() for unique ids.
- aria-invalid + role="alert" for error messaging.
- Keyboard: Tab to focus, Esc clears (if you add handler), Enter submits forms as usual.
- Color contrast via CSS variables; matches light/dark themes.
*/
