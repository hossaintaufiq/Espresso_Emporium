import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import UpdateCoffee from "../Components/UpdateCoffee/UpdateCoffee";
import AddCoffee from "../Components/AddCoffee/AddCoffee";
import Home from "../Pages/Home/Home";


const myRouter = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout></MainLayout>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/addCoffee',
                element: <AddCoffee></AddCoffee>
            },
            {
                path: '/updateCoffee',
                element: <UpdateCoffee></UpdateCoffee>
            }
        ]
    },
    
])

export default myRouter;