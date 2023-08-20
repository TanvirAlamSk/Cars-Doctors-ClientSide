import About from "../Pages/About/About";
import AllProduct from "../Pages/AllProduct/AllProduct";
import Blog from "../Pages/Blog/Blog";
import Checkout from "../Pages/Checkout/Checkout";
import Contract from "../Pages/Contract/Contract";
import Dashboard from "../Pages/Dashboard/Dashboard";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import NotFound from "../Pages/NotFound/NotFound";
import Service from "../Pages/Service/Service";
import SignUp from "../Pages/SignUp/SignUp";
import ServiceSection from "../component/ServiceSection/ServiceSection";
import Secondary from "../layouts/Secondary/Secondary";
import PrivateRouter from "./PrivateRouter";
const { createBrowserRouter } = require("react-router-dom");
const { default: Main } = require("../layouts/Main/Main");

export const router = createBrowserRouter([
    {
        path: "/", element: <Main></Main>, children: [
            {
                path: "/", element: <Home></Home>
            },
            {
                path: "/product", element: <AllProduct></AllProduct>, loader: () => fetch("catalog.json")
            },
            {
                path: "/service", element: <ServiceSection></ServiceSection>
            },
            {
                path: "/dashboard", element: <PrivateRouter>
                    <Dashboard></Dashboard>
                </PrivateRouter>
            },
            {
                path: "/service/:id", element: <PrivateRouter>
                    <Service></Service>
                </PrivateRouter>,
                loader: ({ params }) => fetch(`http://localhost:5000/service/${params.id}`)
            },
            {
                path: "/about", element: <About></About>
            },
            {
                path: "/contract", element: <Contract></Contract>
            },
            {
                path: "/checkout/:id", element: <PrivateRouter>
                    <Checkout></Checkout>
                </PrivateRouter>,
                loader: ({ params }) => fetch(`http://localhost:5000/product/${params.id}`)
            },
            {
                path: "/blog", element: <Blog></Blog>
            },
            {
                path: "/login", element: <Login></Login>
            },
            {
                path: "/signup", element: <SignUp></SignUp>
            }
        ]
    },
    {
        path: "/about", element: <Secondary></Secondary>, children: [

        ]
    },
    {
        path: "*", element: <NotFound></NotFound>
    }

])