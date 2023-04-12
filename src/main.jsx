import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './Components/Home/Home';
import Statistics from './Components/Statistics/Statistics';
import Applied from './Components/Applied/Applied';
import Blog from './Components/Blog/Blog';
import FeatureDetails from './Components/FeatureDetails/FeatureDetails';
import Error from './Components/Error/Error';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App></App>,
    errorElement: <Error></Error>,
    children:[
      {
        path: '/',
        element: <Home></Home>,
        loader: ()=> fetch('company.json')
      },
      {
        path: 'feature/:Id',
        element: <FeatureDetails></FeatureDetails>,
        loader: ({params})=> fetch('/company.json')
      },
      {
        path: '/statistics',
        element: <Statistics></Statistics>
      },
      {
        path: '/applied',
        element: <Applied></Applied>
      },
      {
        path: '/blog',
        element: <Blog></Blog>
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>,
)
