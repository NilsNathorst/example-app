import type { Meta, StoryObj } from '@storybook/react-vite';
import { primitives } from './primitives';

const meta: Meta = {
  title: 'Tokens/Colors',
  parameters: { layout: 'padded' },
};
export default meta;
type Story = StoryObj;

const Row = ({ name, hex }: { name: string; hex: string }) => (
  <div style={{ display: 'flex', alignItems: 'center', gap: 16, marginBottom: 12 }}>
    <div
      style={{
        width: 64,
        height: 64,
        borderRadius: 8,
        background: hex,
        border: '1px solid rgba(0,0,0,0.1)',
      }}
    />
    <div>
      <div style={{ fontWeight: 600 }}>{name}</div>
      <div style={{ fontFamily: 'monospace', fontSize: 13, opacity: 0.7 }}>
        primitives.color.{name}
      </div>
      <div style={{ fontFamily: 'monospace', fontSize: 13, opacity: 0.7 }}>{hex}</div>
    </div>
  </div>
);

export const Primitives: Story = {
  render: () => (
    <div>
      {Object.entries(primitives.color).map(([name, hex]) => (
        <Row key={name} name={name} hex={hex} />
      ))}
    </div>
  ),
};
