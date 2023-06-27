import React from "react";

import NavbarItem from "./NavbarItem";
import 'bootswatch/dist/sketchy/bootstrap.css'

function Navbar(props){

    return(
        
        <div className="navbar navbar-expand-lg fixed-top navbar-dark bg-primary">
        <div className="container">
        <a href="/" className="navbar-brand">Lutas Ufc</a>
        
        <button className="navbar-toggler" type="button"
                data-toggle="collapse" data-target="#navbarResponsive"
                aria-controls="navbarResponsive" aria-expanded="false"
                aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
        </button>
        
        <div className="collapse navbar-collapse" id="navbarResponsive">
            <ul className="navbar-nav">
                <NavbarItem href="/viewUser" label="Visualizar Lutadores" />                
                <NavbarItem href="/cadastrarLutador" label="Cadastrar Lutadores" />
                <NavbarItem href="/updateLutador" label="Atualizar Lutador" />
                <NavbarItem href="/deleteLutador" label="Deletar Lutador" />
            </ul>
        </div>
    </div>
</div>
    )
}

export default Navbar;
