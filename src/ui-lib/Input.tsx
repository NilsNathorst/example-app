import styled from "styled-components";

const StyledInput = styled.input`
  background: ${({ theme }) => theme.palette.background};
  color: ${({ theme }) => theme.palette.text};
  border: 1px solid ${({ theme }) => theme.palette.text};
  border-radius: ${({ theme }) => theme.radius.sm}px;
  padding: ${({ theme }) => theme.spacing[3]}px;
  font-family: ${({ theme }) => theme.typography.body.fontFamily};
  font-size: ${({ theme }) => theme.typography.body.fontSize}px;
  line-height: ${({ theme }) => theme.typography.body.lineHeight};
  outline: none;
  width: 240px;

  &::placeholder {
    color: ${({ theme }) => theme.palette.text};
    opacity: 0.6;
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
