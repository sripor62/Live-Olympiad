
import { createRoot } from 'react-dom/client';
import { CssBaseline, ThemeProvider } from '@mui/material';
import { ErrorBoundary } from "react-error-boundary";

import './index.css';
import App from './App';
import { customTheme } from './beautifiers/light/customTheme';
import { QueryClient, QueryClientProvider } from 'react-query';
import { ErrorFallback } from './components/ErrorPage';
const queryClient = new QueryClient({
  refetchOnWindowFocus: false
})

const container = document.getElementById('root');
const root = createRoot(container);
root.render(<>
  <ErrorBoundary FallbackComponent={ErrorFallback}>
    <QueryClientProvider client={queryClient}>
          <ThemeProvider theme={customTheme} >
            <CssBaseline />
            <App />
          </ThemeProvider>
    </QueryClientProvider>
  </ErrorBoundary>
</>);
