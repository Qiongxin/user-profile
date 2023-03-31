import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Main from './Components/Main';
import Add from './Components/Add';
import Update from './Components/Update';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/users",
    element: <Main />
  },
  {
    path: "/users/add",
    element: <Add />
  },
  {
    path: "/users/update",
    element: <Update />
  }
]);

// Task 1. Set up a new project using Create React App.
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

