import React from "react";
import Home from "./Components/Home";
import About from "./Components/About";
import Contact from "./Components/Contact";

const routes = [
    {
        path : '/',
        exact : true,
        main : ()=> <Home />
    },

    { 
        path: '/about',
        exact: true,
        main : ({match})=> <About match = {match} />
    },

    {
        path: '/contact',
        exact: true,
        main: ({match})=> <Contact match = {match} />
    },
]

export default routes;