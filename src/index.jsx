import React from 'react';
import ReactDOM from 'react-dom/client';
import './assets/styles/style.scss';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createBrowserRouter, RouterProvider, useLoaderData } from 'react-router-dom';
import ErrorPage from './pages/ErrorPage/ErrorPage';
import FrontPage from './pages/FrontPage/FrontPage';
import RoutePage from './pages/RoutePage/RoutePage';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <FrontPage />
      },
      {
        path: "/transport-route",
        element: <RoutePage />,
        errorElement: <ErrorPage />
      }
    ]
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
