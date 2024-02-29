import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css';
import HomePage from './pages/home/index.tsx';
import { store } from './store/store.ts';
import DashboardLayout from './components/layout/DashboardLayout.tsx';
import OfficeManagementPage from './pages/dashboard/office/page.tsx';
import BusManagementPage from './pages/dashboard/bus/page.tsx';
import OrderManagementPage from './pages/dashboard/order/page.tsx';
import NotProccessLayout from './pages/dashboard/order/components/NotProccessList.tsx';
import OrderDetails from './pages/dashboard/order/components/OrderDetails.tsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/",
    element: <DashboardLayout />,
    children: [
      {
        path: "/office",
        element: <OfficeManagementPage />,
      },
      {
        path: "/bus",
        element: <BusManagementPage />,
      },
      {
        path: "/order",
        element: <OrderManagementPage />,
        children: [
          {
            path: "/order",
            element: <NotProccessLayout />,
          },
          {
            path: "/order/:id",
            element: <OrderDetails />,
          },
        ]
      }
    ],
  }
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>,
)
