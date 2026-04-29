import { primitives } from './primitives';

const sans = primitives.font.family.sans;

export const typography = {
  h1: {
    fontFamily: sans,
    fontSize: primitives.font.size['3xl'],
    fontWeight: primitives.font.weight.bold,
    lineHeight: primitives.font.lineHeight.tight,
  },
  h2: {
    fontFamily: sans,
    fontSize: primitives.font.size['2xl'],
    fontWeight: primitives.font.weight.bold,
    lineHeight: primitives.font.lineHeight.tight,
  },
  h3: {
    fontFamily: sans,
    fontSize: primitives.font.size.xl,
    fontWeight: primitives.font.weight.medium,
    lineHeight: primitives.font.lineHeight.tight,
  },
  body: {
    fontFamily: sans,
    fontSize: primitives.font.size.md,
    fontWeight: primitives.font.weight.regular,
    lineHeight: primitives.font.lineHeight.normal,
  },
  bodySmall: {
    fontFamily: sans,
    fontSize: primitives.font.size.sm,
    fontWeight: primitives.font.weight.regular,
    lineHeight: primitives.font.lineHeight.normal,
  },
  caption: {
    fontFamily: sans,
    fontSize: primitives.font.size.xs,
    fontWeight: primitives.font.weight.regular,
    lineHeight: primitives.font.lineHeight.normal,
  },
  button: {
    fontFamily: sans,
    fontSize: primitives.font.size.md,
    fontWeight: primitives.font.weight.medium,
    lineHeight: primitives.font.lineHeight.tight,
  },
} as const;

export type Typography = typeof typography;
