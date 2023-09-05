import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import router from './Router/router.jsx'
import { RouterProvider } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import {QueryClient,QueryClientProvider} from '@tanstack/react-query'
const queryClient = new QueryClient()


import 'react-toastify/dist/ReactToastify.css';
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ToastContainer
      position="bottom-center"
      autoClose={5000}
      hideProgressBar={false}
      newestOnTop={false}
      closeOnClick
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover
      theme="light"
    />
        <QueryClientProvider client={queryClient}>
        <RouterProvider router={router} />
    </QueryClientProvider>
    
  </React.StrictMode>,
)
