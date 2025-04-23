//Code for the entire application 
import { RouterProvider } from "react-router-dom";
import { createBrowserRouter } from "react-router-dom";

import App from './App'

import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'

const router = createBrowserRouter([
    {path: '/', element: <App/>},
])

ReactDOM.createRoot(document.getElementById('root')).render(
    <RouterProvider router={router}/>
)
