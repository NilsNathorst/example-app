import type { Meta, StoryObj } from '@storybook/react-vite';
import { Text } from './Text';

const meta: Meta<typeof Text> = {
  title: 'ui-lib/Text',
  component: Text,
  argTypes: {
    as: {
      control: 'select',
      options: ['h1', 'h2', 'h3', 'body', 'bodySmall', 'caption', 'button'],
    },
  },
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/design/glHNVEueWWqB9u6VxafyKn/Nils-Testar?node-id=7-5',
    },
  },
};

export default meta;
type Story = StoryObj<typeof Text>;

export const Default: Story = {
  args: { as: 'body', children: 'The quick brown fox jumps over the lazy dog.' },
};

export const TypeRamp: Story = {
  parameters: { layout: 'padded' },
  render: () => (
    <div>
      <Text as="h1">Heading 1</Text>
      <Text as="h2">Heading 2</Text>
      <Text as="h3">Heading 3</Text>
      <Text as="body">Body — the quick brown fox.</Text>
      <Text as="bodySmall">Body small — secondary text.</Text>
      <Text as="caption">Caption — fine print.</Text>
    </div>
  ),
};
