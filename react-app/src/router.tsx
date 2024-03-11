import { createBrowserRouter } from "react-router-dom";
import Page from "./page";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Page/>,
    }  
]);

export default router;
