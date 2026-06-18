import {createBrowserRouter, RouterProvider} from "react-router";
// import Layout from "./Layout.jsx";
import Home from "./pages/home.jsx";
import Layout from "./layout.jsx";
// import PlantDetails from "./PlantDetails.jsx";
// import PlantEdit from "./PlantEdit.jsx";
// import Create from "./Create.jsx";

function App() {

    const router = createBrowserRouter([

        {
            element: <Layout/>,
            children: [
                {
                    path: "/",
                    element: <Home/>,
                },
            ],
        },
    ]);
    return (
        <>
            <RouterProvider router={router}/>
        </>
    )
}

export default App
