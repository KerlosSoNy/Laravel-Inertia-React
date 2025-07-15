import '../css/app.css';

import { createInertiaApp } from '@inertiajs/react';
import { resolvePageComponent } from 'laravel-vite-plugin/inertia-helpers';
import { createRoot } from 'react-dom/client';
import { initializeTheme } from './hooks/use-appearance';
import { I18nextProvider } from 'react-i18next';
import { StrictMode } from 'react';
import { Provider } from 'react-redux'

import i18next from './lib/i18n';
import store from './lib/redux/store';
import Toast from './components/toast/toast';

const appName = import.meta.env.VITE_APP_NAME || 'Laravel';

createInertiaApp({
    title: (title) => title ? `${title} - ${appName}` : appName,
    resolve: (name) => resolvePageComponent(`./pages/${name}.tsx`, import.meta.glob('./pages/**/*.tsx')),
    setup({ el, App, props }) {

        const root = createRoot(el);


        root.render(
            <StrictMode>
                <Provider store={store}>
                    <I18nextProvider i18n={i18next}>
                        <App {...props} />
                        <Toast />
                    </I18nextProvider>
                </Provider>
            </StrictMode>
        );

    },
    progress: {
        color: '#4B5563',
    },
});

// This will set light / dark mode on load...
initializeTheme();
