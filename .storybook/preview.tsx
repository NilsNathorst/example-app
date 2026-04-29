import type { Preview } from "@storybook/react-vite";
import { withThemeFromJSXProvider } from "@storybook/addon-themes";
import { ThemeProvider, createGlobalStyle } from "styled-components";
import { lightTheme, darkTheme, primitives } from "../src/theme";

// Body bg + color + font all come from the active theme. Storybook's
// backgrounds parameter (below) pre-paints the iframe with the same value
// so there's no white→dark flash before styled-components mounts.
const GlobalStyles = createGlobalStyle`
  html, body {
    margin: 0;
    background: ${({ theme }) => theme.palette.background};
    color: ${({ theme }) => theme.palette.text};
    font-family: ${({ theme }) => theme.typography.body.fontFamily};
    min-height: 100vh;
  }
  *, *::before, *::after { box-sizing: border-box; }
`;

const preview: Preview = {
  parameters: {
    layout: 'centered',
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    a11y: { test: "todo" },
    backgrounds: {
      options: {
        light: { name: "Light", value: primitives.color.Milk },
        dark: { name: "Dark", value: primitives.color.Coffee },
      },
    },
  },
  initialGlobals: {
    backgrounds: { value: "light" },
  },
  decorators: [
    withThemeFromJSXProvider({
      themes: { light: lightTheme, dark: darkTheme },
      defaultTheme: "light",
      Provider: ThemeProvider,
      GlobalStyles,
    }),
  ],
};

export default preview;
