import styled from 'styled-components';
import { primitives } from '../theme/primitives';

// Button uses primitives.color.Milk for text (always white) since Ocean is
// saturated enough to need white text in both themes — equivalent to an
// "on-info" semantic token, which the design system doesn't define yet.
const StyledButton = styled.button`
  background: ${({ theme }) => theme.palette.info};
  color: ${primitives.color.Milk};
  border: none;
  cursor: pointer;
  padding: ${({ theme }) => theme.spacing[3]}px ${({ theme }) => theme.spacing[4]}px;
  border-radius: ${({ theme }) => theme.radius.md}px;
  font-family: ${({ theme }) => theme.typography.button.fontFamily};
  font-size: ${({ theme }) => theme.typography.button.fontSize}px;
  font-weight: ${({ theme }) => theme.typography.button.fontWeight};
  line-height: ${({ theme }) => theme.typography.button.lineHeight};
`;

export type ButtonProps = {
  children: React.ReactNode;
  onClick?: () => void;
};

export const Button = ({ children, onClick }: ButtonProps) => (
  <StyledButton onClick={onClick}>{children}</StyledButton>
);
