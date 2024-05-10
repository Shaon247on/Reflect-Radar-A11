import { createBrowserRouter } from 'react-router-dom';
import Layout from '../Layout/Layout';
import Queries from '../Pages/Queries/Queries';
import ContactUs from '../Pages/ContactUs/ContactUs';
import Login from '../Pages/Login/Login';
import Register from '../Pages/Register/Register';
import Home from '../Pages/Home/Home/Home';

const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout></Layout>,
      children:[
        {
          path: '/',
          element: <Home></Home>
        },
        {
          path: '/queries',
          element: <Queries></Queries>
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