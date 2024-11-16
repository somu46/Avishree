import React, { lazy, Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import ErrorPage from './Pages/Error/Error';
import QuoteForm from './Components/BookFrom/BookFrom';
import AboutUs from './Pages/AboutUs/AboutUs';
import Services from './Pages/Services/Services';
import Menu from './Pages/Menu/Menu';
import Gallery from './Pages/Gallery/Gallery';
import Contact from './Pages/ContactUs/ContactUs';
import Blogs from './Pages/Blogs/Blogs';
import Photos from './Pages/Photo/Photos';
import Videos from './Pages/Videos/Videos';
import LoadingSpinner from './Components/Loding/Loding.js';

// Lazy load the Root component with a delay
const Root = lazy(() => waitPromise(1500).then(() => import('./Root/Root')));

// Simulate a promise for loading delay
const waitPromise = (time) => {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve();
    }, time);
  });
}

// Set up your routes with React Router v6
const Rout = createBrowserRouter([
  {
    path: "",
    element: (
      <Suspense fallback={<LoadingSpinner />}>
        <Root />
      </Suspense>
    ),
    children: [
      {
        path: "/",
        element: <App />
      },
      {
        path: "/AboutUs",
        element: <AboutUs />
      },
      {
        path: "/Services",
        element: <Services />
      },
      {
        path: "/book",
        element: <QuoteForm />
      },
      {
        path: "/Menu",
        element: <Menu />
      },
      {
        path: "/Gallery",
        element: <Gallery />
      },
      {
        path: "/Contact",
        element: <Contact />
      },
      {
        path: "/Blogs",
        element: <Blogs />
      },
      {
        path: "/Gallery/Photos",
        element: <Photos />
      },
      {
        path: "/Gallery/Videos",
        element: <Videos />
      },
      {
        path: "*",
        element: <ErrorPage />
      }
    ]
  }
]);

// Render the application
const root = ReactDOM.createRoot(document.getElementById('root'));



root.render(

  <React.StrictMode>
    <RouterProvider router={Rout} />
  </React.StrictMode>
);
