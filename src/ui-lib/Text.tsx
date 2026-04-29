import styled, { css } from 'styled-components';
import type { Typography } from '../theme/typography';

type TextStyle = keyof Typography;

const styleFor = (variant: TextStyle) => css`
  font-family: ${({ theme }) => theme.typography[variant].fontFamily};
  font-size: ${({ theme }) => theme.typography[variant].fontSize}px;
  font-weight: ${({ theme }) => theme.typography[variant].fontWeight};
  line-height: ${({ theme }) => theme.typography[variant].lineHeight};
`;

const Span = styled.span<{ $variant: TextStyle }>`
  color: ${({ theme }) => theme.palette.text};
  margin: 0;
  ${({ $variant }) => styleFor($variant)};
`;

export type TextProps = {
  as?: TextStyle;
  children: React.ReactNode;
};

const tagFor: Record<TextStyle, keyof React.JSX.IntrinsicElements> = {
  h1: 'h1',
  h2: 'h2',
  h3: 'h3',
  body: 'p',
  bodySmall: 'p',
  caption: 'span',
  button: 'span',
};

export const Text = ({ as = 'body', children }: TextProps) => (
  <Span as={tagFor[as]} $variant={as}>
    {children}
  </Span>
);
