import React from 'react';
import { DefaultTheme, ThemeProvider } from 'styled-components';
import Header from './components/Header';
import GlobalStyles from './styles/global';
import dark from './styles/themes/dark';
import light from './styles/themes/light';
import usePersistedState from './utils/usePersistedState';

const App = () => {
  const [theme, setTheme] = usePersistedState<DefaultTheme >('theme', light);

  const toggleTheme = () => {
    setTheme(theme.title === 'light' ? dark : light);
  };

  return (
    <ThemeProvider theme={theme} >
      <div className="App">
        <Header toggleTheme={toggleTheme} />
        <GlobalStyles />
      </div>
    </ThemeProvider>
  );
}

export default App;
