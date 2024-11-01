import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import './index.css'
import RootLayout from './routes/RootLayout.jsx'
import NewPost from './routes/NewPost.jsx'
import Posts from './routes/Posts.jsx'

const router = createBrowserRouter([
  {
    path: '/', element: <RootLayout />, children: [
      {
        path: '/', element: <Posts />, children: [
          {
            path: '/create-post', element: <NewPost />
          }
        ]
      },
    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
