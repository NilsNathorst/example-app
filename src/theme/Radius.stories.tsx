import type { Meta, StoryObj } from '@storybook/react-vite';
import { primitives } from './primitives';

const meta: Meta = {
  title: 'Tokens/Radius',
  parameters: { layout: 'padded' },
};
export default meta;
type Story = StoryObj;

export const Scale: Story = {
  render: () => (
    <div style={{ display: 'flex', flexWrap: 'wrap', gap: 24 }}>
      {Object.entries(primitives.radius).map(([name, px]) => (
        <div
          key={name}
          style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 8 }}
        >
          <div
            style={{
              width: 96,
              height: 96,
              background: '#0000ff',
              borderRadius: px,
            }}
          />
          <div style={{ fontFamily: 'monospace', fontSize: 13 }}>radius.{name}</div>
          <div style={{ fontFamily: 'monospace', fontSize: 12, color: '#666' }}>
            {px === 9999 ? 'pill' : `${px}px`}
          </div>
        </div>
      ))}
    </div>
  ),
};
