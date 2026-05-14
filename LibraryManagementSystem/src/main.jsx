import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Welcome from '../components/Welcome.jsx'
import BookList from '../components/BookList.jsx'
import {createBrowserRouter, RouterProvider} from "react-router-dom"
import Header from '../components/Header.jsx'
import AddBook from '../components/AddBook.jsx'

//Create Routing Information

const appRouter = createBrowserRouter([
      {
        path: "/",
        element: <Welcome />,
      },
      {
        path: "/BookList",
        element: <BookList />,
      },
      {
        path: "/AddBook",
        element: <AddBook />
      },
    ]);


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Header />
    <RouterProvider router={appRouter} />
  </StrictMode>,
)
