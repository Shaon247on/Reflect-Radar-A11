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
import UpdateCard from '../Pages/MyQuery/QueryCard/UpdateCard';
import MyRecommendations from '../Pages/MyRecommendations/MyRecommendations';
import ForRecommendation from '../Pages/ForRecommendation/ForRecommendation';
import AboutUs from '../Pages/About Us/AboutUs';

const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout></Layout>,
      errorElement:<ErrorPage></ErrorPage>,
      children:[
        {
          path: '/',
          element: <Home></Home>,          
        },
        {
          path: '/queries',
          element: <AllQueries></AllQueries>,         
        },
        {
          path: '/contactus',
          element: <ContactUs></ContactUs>
        },
        {
          path: '/aboutus',
          element: <AboutUs></AboutUs>
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
          loader: ({params})=> fetch(`${import.meta.env.VITE_API_URL}/query/${params.id}`)
        },
        {
          path: '/update/:id',
          element: <PrivateRoute><UpdateCard></UpdateCard></PrivateRoute>,
          loader: ({params})=> fetch(`${import.meta.env.VITE_API_URL}/query/${params.id}`)
        },
        {
          path: '/myrecommendations',
          element: <PrivateRoute><MyRecommendations></MyRecommendations></PrivateRoute>
        },
        {
          path: '/forrecommendation',
          element: <PrivateRoute><ForRecommendation></ForRecommendation></PrivateRoute>
        }
      ]
    },
  ]);

export default router;