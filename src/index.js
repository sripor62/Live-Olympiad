import React from 'react';
import { CssBaseline, ThemeProvider } from '@mui/material';
import { ErrorBoundary } from "react-error-boundary";

import './index.css';
import App from './App';
import { customTheme } from './theme/light/customTheme';
import { QueryClient, QueryClientProvider } from 'react-query';
import { ErrorFallback } from './components/Error/ErrorPage';
import { render } from 'react-dom';

const root = document.getElementById("root");
const queryClient = new QueryClient({
  refetchOnWindowFocus: false
})

render(<>
  <ErrorBoundary FallbackComponent={ErrorFallback}>
    <QueryClientProvider client={queryClient}>
          <ThemeProvider theme={customTheme} >
            <CssBaseline />
            <App />
          </ThemeProvider>
    </QueryClientProvider>
  </ErrorBoundary>
</>, root);
