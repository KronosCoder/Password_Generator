import NotFound from '../pages/Errors/NotFound'
import Home from '../pages/Home/Home'
import { createBrowserRouter } from 'react-router-dom'

const routes = createBrowserRouter([
    {
        path: '/',
        element: <Home />,
    },
    {
        path: '*',
        element: <NotFound />,
    },
])

export default routes
