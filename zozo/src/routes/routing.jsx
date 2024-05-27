import {createBrowserRouter,RouterProvider} from "react-router-dom";
import Login from "../components/login/login";
import Registration from "../components/register/Registration";
import Home from '../components/Home/Home';
const ReactRouting=()=>{
    const router=createBrowserRouter([{
        path:"/",
        element:<Home/>,
    },{
        path:"/Login",
        element:<Login/>,
    },{
        path:"/Register",
        element:<Registration/>,
    }
]);
return(
    <RouterProvider router={router}/>
)

};
export default ReactRouting;
