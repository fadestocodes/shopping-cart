import Homepage from "./homepage"
import  Checkout  from "./checkout";
// import  Confirmation  from "./confirmation"
import  App  from "../App"
import { Children } from "react";
import { element } from "prop-types";


const routes = [
    {
        path : '/',
        element : < App />,
        children : [
            {
                index: true,
                element: < Homepage />
            },
            {
                path : 'checkout',
                element : < Checkout />
            }
        ]
        // errorElement : < />
    }
];

export default routes;