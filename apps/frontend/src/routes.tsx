import { Outlet, createBrowserRouter } from "react-router-dom";
import Authentication from "./auth/Authentication";
import { Homepage } from "./pages/Homepage";

export const router = createBrowserRouter([
    {
        path: "/",
        element:
            <Authentication>
                <Outlet />
            </Authentication>,
        children: [{
            index: true,
            element: <Homepage />
        }]
    },
]);