import styled from "styled-components";

// MUI "standard" / underline-style input: bottom border only, transparent bg.
// Matches the Figma design.
const StyledInput = styled.input`
  background: transparent;
  color: ${({ theme }) => theme.palette.text};
  border: none;
  border-bottom: 1px solid ${({ theme }) => theme.palette.text};
  border-radius: 0;
  padding: ${({ theme }) => theme.spacing[3]}px 0;
  font-family: ${({ theme }) => theme.typography.body.fontFamily};
  font-size: ${({ theme }) => theme.typography.body.fontSize}px;
  line-height: ${({ theme }) => theme.typography.body.lineHeight};
  outline: none;
  width: 240px;

  &::placeholder {
    color: ${({ theme }) => theme.palette.text};
    opacity: 0.6;
  }

  &:focus {
    border-bottom-width: 2px;
    padding-bottom: ${({ theme }) => theme.spacing[3] - 1}px;
  }
`;

export type InputProps = {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
};

export const Input = ({ value, onChange, placeholder }: InputProps) => (
  <StyledInput
    value={value}
    onChange={(e) => onChange(e.target.value)}
    placeholder={placeholder}
  />
);
