import { createBrowserRouter } from 'react-router-dom';
import Layout from '../Layout/Layout';
import ContactUs from '../Pages/ContactUs/ContactUs';
import Login from '../Pages/Login/Login';
import Register from '../Pages/Register/Register';
import Home from '../Pages/Home/Home/Home';
import AllQueries from '../Pages/AllQuries/AllQueries/AllQueries';

const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout></Layout>,
      children:[
        {
          path: '/',
          element: <Home></Home>,
          loader: ()=> fetch('data.json')
        },
        {
          path: '/queries',
          element: <AllQueries></AllQueries>,
          loader: ()=> fetch('data.json')
        },
        {
          path: '/contactus',
          element: <ContactUs></ContactUs>
        },
        {
          path: '/login',
          element: <Login></Login>
        },
        {
          path: '/register',
          element: <Register></Register>
        }
      ]
    },
  ]);

export default router;