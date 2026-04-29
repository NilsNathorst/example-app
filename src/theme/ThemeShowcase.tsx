import styled, { useTheme } from 'styled-components';

const Wrap = styled.div`
  background: ${({ theme }) => theme.palette.background};
  color: ${({ theme }) => theme.palette.text};
  padding: ${({ theme }) => theme.spacing[6]}px;
  font-family: ${({ theme }) => theme.typography.body.fontFamily};
  min-height: 100vh;
`;

const Heading = styled.h2`
  font-size: ${({ theme }) => theme.typography.h2.fontSize}px;
  font-weight: ${({ theme }) => theme.typography.h2.fontWeight};
  line-height: ${({ theme }) => theme.typography.h2.lineHeight};
  margin: 0 0 ${({ theme }) => theme.spacing[4]}px 0;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: ${({ theme }) => theme.spacing[3]}px;
  max-width: 640px;
`;

const Row = styled.div`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing[3]}px;
  border: 1px solid ${({ theme }) => theme.palette.text};
  border-radius: ${({ theme }) => theme.radius.md}px;
  padding: ${({ theme }) => theme.spacing[3]}px;
`;

const Swatch = styled.div<{ $color: string }>`
  width: 32px;
  height: 32px;
  border-radius: ${({ theme }) => theme.radius.sm}px;
  background: ${({ $color }) => $color};
  border: 1px solid ${({ theme }) => theme.palette.text};
`;

const Label = styled.div`
  font-size: ${({ theme }) => theme.typography.body.fontSize}px;
  font-weight: ${({ theme }) => theme.typography.body.fontWeight};
`;

const Mono = styled.code`
  font-family: monospace;
  font-size: ${({ theme }) => theme.typography.bodySmall.fontSize}px;
  opacity: 0.7;
`;

const PALETTE_KEYS = ['background', 'text', 'info', 'success', 'warning', 'error'] as const;

export const ThemeShowcase = ({ themeName }: { themeName: string }) => {
  const theme = useTheme();
  return (
    <Wrap>
      <Heading>{themeName} theme — semantic palette</Heading>
      <Grid>
        {PALETTE_KEYS.map((key) => (
          <Row key={key}>
            <Swatch $color={theme.palette[key]} />
            <div style={{ display: 'flex', flexDirection: 'column' }}>
              <Label>palette.{key}</Label>
              <Mono>{theme.palette[key]}</Mono>
            </div>
          </Row>
        ))}
      </Grid>
    </Wrap>
  );
};
