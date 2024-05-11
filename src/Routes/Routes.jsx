import { createBrowserRouter } from 'react-router-dom';
import Layout from '../Layout/Layout';
import ContactUs from '../Pages/ContactUs/ContactUs';
import Login from '../Pages/Login/Login';
import Register from '../Pages/Register/Register';
import Home from '../Pages/Home/Home/Home';
import AllQueries from '../Pages/AllQuries/AllQueries/AllQueries';
import ErrorPage from '../Pages/ErrorPage/ErrorPage';
import PrivateRoute from './PrivateRoute';
import MyQuery from '../Pages/MyQuery/MyQuery/MyQuery';
import QueryDetails from '../Pages/AllQuries/QueryDetails/QueryDetails';

const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout></Layout>,
      errorElement:<ErrorPage></ErrorPage>,
      children:[
        {
          path: '/',
          element: <Home></Home>,
          loader: ()=> fetch(`${import.meta.env.VITE_API_URL}/queries`)
        },
        {
          path: '/queries',
          element: <AllQueries></AllQueries>,
          loader: ()=> fetch(`${import.meta.env.VITE_API_URL}/queries`)
        },
        {
          path: '/contactus',
          element: <PrivateRoute><ContactUs></ContactUs></PrivateRoute>
        },
        {
          path: '/login',
          element: <Login></Login>
        },
        {
          path: '/register',
          element: <Register></Register>
        },
        {
          path:'/myquery',
          element: <PrivateRoute><MyQuery></MyQuery></PrivateRoute>
        },
        {
          path:'/querydetails/:id',
          element: <PrivateRoute><QueryDetails></QueryDetails></PrivateRoute>,
          loader: ({params})=> fetch(`${import.meta.env.VITE_API_URL}/${params.id}`)
        }
      ]
    },
  ]);

export default router;