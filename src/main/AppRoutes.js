import React from "react";
import {Route, BrowserRouter} from "react-router-dom"

import ViewUser from "../screens/viewUser/ViewUser";
import CadastrarLutador from "../screens/cadastrarLutador/CadastrarLutador";
import Home from "../screens/home/Home";
import UpdateLutador from "../screens/updateLutador/UpdateLutador";
import DeleteLutador from "../screens/deleteLutador/DeleteLutador";

function AppRoutes(){
    return(
        <BrowserRouter>
        <Route component = {ViewUser} path="/"exact />
        <Route component = {ViewUser} path="/viewUser" />
        <Route component = {CadastrarLutador} path="/cadastrarLutador"/>
        <Route component = {UpdateLutador} path="/updateLutador"/>
        <Route component = {DeleteLutador} path="/deleteLutador"/>
        </BrowserRouter>
    );
}

export default AppRoutes;