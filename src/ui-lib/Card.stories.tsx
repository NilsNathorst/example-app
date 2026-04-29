import type { Meta, StoryObj } from '@storybook/react-vite';
import { Card } from './Card';
import { Text } from './Text';

const meta: Meta<typeof Card> = {
  title: 'ui-lib/Card',
  component: Card,
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/design/glHNVEueWWqB9u6VxafyKn/Nils-Testar?node-id=7-7',
    },
  },
};

export default meta;
type Story = StoryObj<typeof Card>;

export const Default: Story = {
  render: () => (
    <Card>
      <Text as="h3">Card title</Text>
      <Text as="body">A card uses palette.background with a palette.text border and radius.md.</Text>
    </Card>
  ),
};
