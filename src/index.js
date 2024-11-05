import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Root from './Root/Root';
import ErrorPage from './Pages/Error/Error';
import QuoteForm from './Components/BookFrom/BookFrom';



const Rout=createBrowserRouter([
  {
    path:"",
    element:<Root/>,
    children:[
      {
        path:"/",
        element:<App/>
      },
      {
        path:"/book",
        element:<QuoteForm/>
      },
      {
        path:"*",
        element:<ErrorPage/>
      }
    ]
  }
])


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
   <RouterProvider router={Rout}/>
  </React.StrictMode>
);


