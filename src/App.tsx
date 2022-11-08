import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import Root from './routes/root'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
  },
])

if (import.meta.hot) {
  import.meta.hot.dispose(() => router.dispose())
}

export default function App() {
  React.useEffect(() => {
    fetch('https://github.com/octocat')
      .then((response) => response.json())
      .then((response) => console.log(response))
  }, [])

  return <RouterProvider router={router} />
}
