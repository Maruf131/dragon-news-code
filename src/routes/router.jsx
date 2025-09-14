import { createBrowserRouter } from "react-router-dom";
import HomeLayout from "../layouts/HomeLayout";


const router = createBrowserRouter(
    [
        {
            path: "/",
            element: <HomeLayout></HomeLayout>
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