import type { Meta, StoryObj } from '@storybook/react-vite';
import { primitives } from './primitives';

const meta: Meta = {
  title: 'Tokens/Spacing',
  parameters: { layout: 'padded' },
};
export default meta;
type Story = StoryObj;

export const Scale: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
      {Object.entries(primitives.spacing).map(([step, px]) => (
        <div key={step} style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
          <div style={{ width: 80, fontFamily: 'monospace', fontSize: 13 }}>
            spacing[{step}]
          </div>
          <div
            style={{
              width: px,
              height: 16,
              background: '#0000ff',
              borderRadius: 2,
            }}
          />
          <div style={{ fontFamily: 'monospace', fontSize: 13, color: '#666' }}>
            {px}px
          </div>
        </div>
      ))}
    </div>
  ),
};
