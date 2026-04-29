import type { Meta, StoryObj } from '@storybook/react-vite';
import { primitives } from './primitives';
import { typography } from './typography';

const meta: Meta = {
  title: 'Tokens/Typography',
  parameters: { layout: 'padded' },
};
export default meta;
type Story = StoryObj;

const SAMPLE = 'The quick brown fox jumps over the lazy dog.';

const Specimen = ({
  fontFamily,
  fontSize,
  fontWeight,
  lineHeight,
  label,
}: {
  fontFamily: string;
  fontSize: number;
  fontWeight: number;
  lineHeight: number;
  label: string;
}) => (
  <div style={{ marginBottom: 24 }}>
    <div style={{ fontFamily: 'monospace', fontSize: 12, opacity: 0.6, marginBottom: 4 }}>
      {label}
    </div>
    <div style={{ fontFamily, fontSize, fontWeight, lineHeight }}>{SAMPLE}</div>
  </div>
);

export const SizeRamp: Story = {
  name: 'Primitive: font.size',
  render: () => (
    <div>
      {Object.entries(primitives.font.size).map(([name, size]) => (
        <Specimen
          key={name}
          fontFamily={primitives.font.family.sans}
          fontSize={size}
          fontWeight={primitives.font.weight.regular}
          lineHeight={primitives.font.lineHeight.normal}
          label={`font.size.${name} — ${size}px`}
        />
      ))}
    </div>
  ),
};

export const Weights: Story = {
  name: 'Primitive: font.weight',
  render: () => (
    <div>
      {Object.entries(primitives.font.weight).map(([name, weight]) => (
        <Specimen
          key={name}
          fontFamily={primitives.font.family.sans}
          fontSize={primitives.font.size.lg}
          fontWeight={weight}
          lineHeight={primitives.font.lineHeight.normal}
          label={`font.weight.${name} — ${weight}`}
        />
      ))}
    </div>
  ),
};

export const TextStyles: Story = {
  name: 'Semantic: typography.*',
  render: () => (
    <div>
      {Object.entries(typography).map(([name, style]) => (
        <Specimen
          key={name}
          fontFamily={style.fontFamily}
          fontSize={style.fontSize}
          fontWeight={style.fontWeight}
          lineHeight={style.lineHeight}
          label={`typography.${name} — ${style.fontSize}px / ${style.fontWeight} / ${style.lineHeight}`}
        />
      ))}
    </div>
  ),
};
