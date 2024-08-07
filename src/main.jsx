import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Layout from './Layout.jsx'
import Home from './Home/Home.jsx'
import User from './User/User.jsx'
import GitHub from './Components/GitHub/GitHub.jsx'
import About from './Components/About/About.jsx'
import Contact from './Contacts/Contact.jsx'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path:"",
        element: <Home/>
      },
      {
        path: "about",
        element: <About />
      },
      {
        path:'contact',
        element: <Contact />
      },
      {
        path: "user/:userid",
        element: <User />
      },
      {
      path:"github",
      element: <GitHub/>
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
