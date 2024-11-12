import React, { lazy, Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
// import Root from './Root/Root';
import ErrorPage from './Pages/Error/Error';
import QuoteForm from './Components/BookFrom/BookFrom';
import AboutUs from './Pages/AboutUs/AboutUs';
import Services from './Pages/Services/Services';
import Menu from './Pages/Menu/Menu';
import Gallery from './Pages/Gallery/Gallery';
import Contact from './Pages/ContactUs/ContactUs';
import Blogs from './Pages/Blogs/Blogs';
import Photos from './Pages/Photos/Photos';
import Videos from './Pages/Videos/Videos';
import  { LoadingComponent } from './Components/Loding/Loding.js';

// const App=lazy(()=>waitPromise(3000).then(()=>import("./App.js")));
const Root=lazy(()=>waitPromise(1500).then(()=>import("./Root/Root")));





const waitPromise=(time)=>{
    
  return new Promise (resolve=>{
    setTimeout(()=>{
      resolve();
    },time)
  })
}







const Rout=createBrowserRouter([
  {
    path:"",
    element:(<Suspense
      fallback={<LoadingComponent/>}>
        <Root/></Suspense>),
    children:[
      {
        path:"/",
        element:(
                <App />
        )
      },
      {
        path:"/AboutUs",
        element:<AboutUs/>
      },
      {
        path:"/Services",
        element:<Services/>
      },
      {
        path:"/book",
        element:<QuoteForm/>
      },
      {
        path:"/Menu",
        element:<Menu/>
      },
      {
        path:"/Gallery",
        element:<Gallery/>
      },
      {
        path:"/Contact",
        element:<Contact/>
      },
      {
        path:"/Blogs",
        element:<Blogs/>
      },
      {
        path:"/Gallery/Photos",
        element:<Photos />
      },
      {
        path:"/Gallery/Videos",
        element:<Videos />
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


