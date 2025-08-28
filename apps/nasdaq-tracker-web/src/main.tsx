import { StrictMode } from 'react';
import * as ReactDOM from 'react-dom/client';
import App from './app/app';
import { createApi } from '@org/api';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

createApi(import.meta.env.VITE_API_URL, import.meta.env.VITE_API_TOKEN);

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
