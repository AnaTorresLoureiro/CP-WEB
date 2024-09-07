import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import GlobalStyled from './global-styled.js'

import Error from './routes/Error.jsx'
import Home from './routes/Home/index.jsx'
import Produtos from './routes/Produtos/index.jsx'
import Sobre from './routes/Sobre/index.jsx'

const router = createBrowserRouter([
  {
    path:'/',
    element:<App/>,
    errorElement:<Error/>,

    children: [
      {
        path:'/',
        element:<Home/>,
      },
      {
        path:'/produtos',
        element:<Produtos/>,
      },
      {
        path:'/sobre',
        element:<Sobre/>,
      }
    ]
  }
])
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
    <GlobalStyled/>
  </StrictMode>,
)
