import type { Preview } from '@storybook/react';
import '../src/styles/theme.css';
import '../src/styles/globals.css';

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: { expanded: true, matchers: { color: /(background|color)$/i, date: /Date$/ } },
    layout: 'centered',
    a11y: { disable: false }
  },
  globalTypes: {
    theme: {
      description: 'Global theme for components',
      defaultValue: 'light',
      toolbar: {
        icon: 'mirror',
        items: ['light', 'dark']
      }
    }
  },
  decorators: [
    (Story, context) => {
      const theme = context.globals.theme ?? 'light';
      document.documentElement.setAttribute('data-theme', theme);
      return Story();
    }
  ]
};
export default preview;
