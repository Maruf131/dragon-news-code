import { createBrowserRouter } from "react-router-dom";
import HomeLayout from "../layouts/HomeLayout";
import Home from "../pages/Home";
import Category from "../pages/Category";


const router = createBrowserRouter(
    [
        {
            path: "/",
            element: <HomeLayout></HomeLayout>,
            errorElement: <h1>ERROR</h1>,
            children:[
                {
                    path: "",
                    element: <Home></Home>
                },
                {
                    path: "/category/:id",
                    element: <Category></Category>,
                    loader: () => fetch("/public/news.json"),
                    
                }
            ]
        },
        {
            path: "/auth",
            element: <h1>This is auth section</h1>
        },
        {
            path: "/news",
            element: <h1>This is news section</h1>
        },
        {
            path: "/*",
            element: <h1>ERROR 404</h1>
        },
        
    ]
)
export default router;