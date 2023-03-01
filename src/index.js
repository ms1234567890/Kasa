import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  createBrowserRouter,
} from "react-router-dom";
import './assets/css/index.css';
import App from './App';
import Root from "./routes/Root";
import ErrorPage from "./pages/Error";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
  },
]);
