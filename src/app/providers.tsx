import { FC, ReactNode } from 'react';
import { BrowserRouter } from 'react-router-dom';
import {
  CssBaseline,
  ThemeProvider,
  createTheme,
  StyledEngineProvider,
} from '@mui/material';
import { Provider } from 'react-redux';
import { store } from '@/app/store/store';

const muiTheme = createTheme();

interface ProvidersProps {
  children: ReactNode;
}

const theme = createTheme();

const AppProviders: FC<ProvidersProps> = ({ children }) => {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <StyledEngineProvider injectFirst>
          <ThemeProvider theme={theme}>
            <CssBaseline />
            {children}
          </ThemeProvider>
        </StyledEngineProvider>
      </Provider>
    </BrowserRouter>
  );
};

export default AppProviders;
