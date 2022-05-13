import React from 'react'
import ReactDOM from 'react-dom/client'
// import * as Sentry from "@sentry/react";
// import { BrowserTracing } from "@sentry/tracing";
import App from './App'
import './index.css';
import {ReactKeycloakProvider} from '@react-keycloak/web'

import keycloak from './keycloak';
//
// Sentry.init({
//     dsn: "https://de0bc0f2247a4ab89b94223e1671a330@o1085532.ingest.sentry.io/6395756",
//     integrations: [new BrowserTracing()],
//
//     // Set tracesSampleRate to 1.0 to capture 100%
//     // of transactions for performance monitoring.
//     // We recommend adjusting this value in production
//     tracesSampleRate: 1.0,
// });

ReactDOM.createRoot(document.getElementById('root')!).render(
    <ReactKeycloakProvider authClient={keycloak} initOptions={{
        flow: 'implicit'
    }}>
        <App/>
    </ReactKeycloakProvider>
)
