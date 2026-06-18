import {createBrowserRouter, RouterProvider} from "react-router";
import Home from "./pages/home.jsx";
import Layout from "./layout.jsx";

const router = createBrowserRouter(
    [
        {
            element: <Layout/>,
            children: [
                {
                    path: "/",
                    element: <Home/>,
                },
            ],
        },
    ],
    {
        basename: "/signatuur",
    }
);

function App() {
    return <RouterProvider router={router}/>;
}

export default App;