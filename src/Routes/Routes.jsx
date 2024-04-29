import { createBrowserRouter } from "react-router-dom";
import Root from "../Root/Root";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import Home from "../pages/Home/Home";
import AllTouristsSpot from "../pages/AllTouristsSpot/AllTouristsSpot";
import AddTouristsSpot from "../pages/AddTouristsSpot/AddTouristsSpot";
import MyList from "../pages/MyList/MyList";
import Login from "../pages/Login/Login";
import SignUp from "../pages/SignUp/SignUp";
import PrivateRoute from "./PrivateRoute";
import ViewDetails from "../pages/ViewDetails/ViewDetails";
import Update from "../pages/Update/Update";
import SpecificCountry from "../pages/SpecificCountry/SpecificCountry";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: '/all-tourists-spot',
        element: <AllTouristsSpot></AllTouristsSpot>
      },
      {
        path: '/add-tourists-spot',
        element: <PrivateRoute>
          <AddTouristsSpot></AddTouristsSpot>
        </PrivateRoute>
      },
      {
        path: '/touristsSpots/:id',
        element: <PrivateRoute>
          <ViewDetails></ViewDetails>
        </PrivateRoute>

      },
      {
        path: '/myList',
        element: <PrivateRoute>
          <MyList></MyList>
        </PrivateRoute>
      },
      {
        path: '/update/:id',
        element: <Update></Update>,
        loader: ({params}) => fetch(`http://localhost:5000/touristsSpot/${params.id}`)
      },
      {
        path: '/specificCountry/:country_Name',
        element: <SpecificCountry></SpecificCountry>
      },
      {
        path: '/login',
        element: <Login></Login>
      },
      {
        path: '/signUp',
        element: <SignUp></SignUp>
      },

    ],
  },
]);

export default router;