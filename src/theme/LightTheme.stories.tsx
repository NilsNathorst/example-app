import type { Meta, StoryObj } from '@storybook/react-vite';
import { ThemeProvider } from 'styled-components';
import { lightTheme } from './index';
import { ThemeShowcase } from './ThemeShowcase';

const meta: Meta = {
  title: 'Themes/Light',
  parameters: {
    layout: 'fullscreen',
    // Lock this story to the light theme regardless of toolbar selection.
    themes: { themeOverride: 'light' },
    backgrounds: { value: 'light' },
    design: {
      type: 'figma',
      url: 'https://www.figma.com/design/glHNVEueWWqB9u6VxafyKn/Nils-Testar?node-id=4-52',
    },
  },
};
export default meta;
type Story = StoryObj;

export const Palette: Story = {
  render: () => (
    <ThemeProvider theme={lightTheme}>
      <ThemeShowcase themeName="Light" />
    </ThemeProvider>
  ),
};
