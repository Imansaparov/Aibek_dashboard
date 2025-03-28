import React from 'react';
import ReactDOM from 'react-dom/client';
import AppProviders from './providers';
import DashboardHome from '@/pages/dashboard/ui/DashboardHome';
import './styles/global.css';

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);

root.render(
    <React.StrictMode>
      <AppProviders>
        <DashboardHome />
      </AppProviders>
    </React.StrictMode>
);