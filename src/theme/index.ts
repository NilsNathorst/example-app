import 'styled-components';
import { primitives } from './primitives';
import { lightSemantic, darkSemantic } from './semantic';
import { typography } from './typography';

const base = {
  spacing: primitives.spacing,
  radius: primitives.radius,
  font: primitives.font,
  typography,
};

export const lightTheme = { ...base, ...lightSemantic };
export const darkTheme = { ...base, ...darkSemantic };

export type Theme = typeof lightTheme;

declare module 'styled-components' {
  // eslint-disable-next-line @typescript-eslint/no-empty-object-type
  export interface DefaultTheme extends Theme {}
}

export { primitives, typography };
