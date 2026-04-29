import styled from 'styled-components';

const StyledCard = styled.div`
  background: ${({ theme }) => theme.palette.background};
  color: ${({ theme }) => theme.palette.text};
  border: 1px solid ${({ theme }) => theme.palette.text};
  border-radius: ${({ theme }) => theme.radius.md}px;
  padding: ${({ theme }) => theme.spacing[4]}px;
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing[2]}px;
`;

export type CardProps = { children: React.ReactNode };

export const Card = ({ children }: CardProps) => <StyledCard>{children}</StyledCard>;
