import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';

import { RouterProvider } from 'react-router-dom';
import router from './Component/Router/Router.jsx';
import Authprovider from './Component/Firebase/Authprovider.jsx';
import {
    QueryClient,
    QueryClientProvider
} from '@tanstack/react-query';

const queryClient = new QueryClient();

createRoot(document.getElementById('root')).render(
    <StrictMode>
        <Authprovider>
            <QueryClientProvider client={queryClient}>
                <RouterProvider router={router} />
            </QueryClientProvider>
        </Authprovider>
    </StrictMode>
);
