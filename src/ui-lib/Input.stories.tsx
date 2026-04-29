import { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react-vite';
import { Input } from './Input';

const meta: Meta<typeof Input> = {
  title: 'ui-lib/Input',
  component: Input,
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/design/glHNVEueWWqB9u6VxafyKn/Nils-Testar?node-id=7-10',
    },
  },
};

export default meta;
type Story = StoryObj<typeof Input>;

export const Default: Story = {
  render: () => {
    const [value, setValue] = useState('');
    return <Input value={value} onChange={setValue} placeholder="Type something…" />;
  },
};
