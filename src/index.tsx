import { render } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from 'app/provider/ThemeProvider';
import { ErrorBoundary } from 'app/provider/ErrorBoundary';
import { StoreProvider } from 'app/provider/StoreProvider';
import 'app/styles/index.scss';
import App from './app/App';
import './shared/config/i18n/i18n';

render(
    <BrowserRouter>
        <StoreProvider>
            <ErrorBoundary>
                <ThemeProvider>
                    <App />
                </ThemeProvider>
            </ErrorBoundary>
        </StoreProvider>
    </BrowserRouter>,
    document.getElementById('root'),
);
