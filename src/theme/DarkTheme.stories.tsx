import type { Meta, StoryObj } from '@storybook/react-vite';
import { ThemeProvider } from 'styled-components';
import { darkTheme } from './index';
import { ThemeShowcase } from './ThemeShowcase';

const meta: Meta = {
  title: 'Themes/Dark',
  parameters: {
    layout: 'fullscreen',
    // Lock this story to the dark theme regardless of toolbar selection.
    themes: { themeOverride: 'dark' },
    backgrounds: { value: 'dark' },
    design: {
      type: 'figma',
      url: 'https://www.figma.com/design/glHNVEueWWqB9u6VxafyKn/Nils-Testar?node-id=4-53',
    },
  },
};
export default meta;
type Story = StoryObj;

export const Palette: Story = {
  render: () => (
    <ThemeProvider theme={darkTheme}>
      <ThemeShowcase themeName="Dark" />
    </ThemeProvider>
  ),
};
