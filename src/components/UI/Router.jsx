import React from 'react'
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Home from "../screens/home/Home";
import CarDetail from "../screens/car-detail/car-detail";

const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route element={<Home/>} path='/' />
                <Route element={<CarDetail/>} path='/car/:id' />
                <Route path='*' element={<div>Not Found</div>}/>
            </Routes>
        </BrowserRouter>
    )
}

export default Router