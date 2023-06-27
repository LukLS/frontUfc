import React from "react";
import {Route, BrowserRouter} from "react-router-dom"

import CreateUfc from "../screens/createUfc/CreateUfc";
import Home from "../screens/home/Home";
import UpdateUfc from "../screens/updateUfc/UpdateUfc";
import DeleteUfc from "../screens/deleteUfc/DeleteUfc";
import UfcViews from "../screens/getUfc/UfcView"

function AppRoutes2(){
    return(
        <BrowserRouter>
        <Route component = {Home} path="/"exact />
        <Route component = {UfcViews} path="/getUfc" />
        <Route component = {CreateUfc} path="/createUfc" />
        <Route component = {UpdateUfc} path="/updateUfc"/>
        <Route component = {DeleteUfc} path="/deleteUfc"/>
        </BrowserRouter>
    );
}

export default AppRoutes2;