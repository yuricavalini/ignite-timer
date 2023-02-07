import { ThemeProvider } from 'styled-components';
import { BrowserRouter, HashRouter } from 'react-router-dom';
import { Router } from './Router';

import { GlobalStyle } from './styles/global';

import { defaultTheme } from './styles/themes/default';
import { CyclesContextProvider } from './contexts/CyclesContext';

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      {/* Changed from BrowserRouter to HashRouter so Gh-pages can support the app. */}
      <HashRouter>
        <CyclesContextProvider>
          <Router />
        </CyclesContextProvider>
      </HashRouter>
      <GlobalStyle />
    </ThemeProvider>
  );
}
