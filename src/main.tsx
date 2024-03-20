import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import {AuthProvider} from "./context/AuthContext"

const rootElement: HTMLElement | null = document.getElementById('root');
if (rootElement) {
  ReactDOM.createRoot(rootElement).render(
    <React.StrictMode>
      <AuthProvider>
      <App />
      </AuthProvider>
    </React.StrictMode>
  );
} else {
  console.error('Element with id "root" not found.');
}
