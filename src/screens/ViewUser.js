import React from "react";
import './ViewsUser.css';

import{WithRouter} from 'react-router-dom';
import axios from 'axios';

import Card from '../../componentes/Card';
import FormGroup from '../../componentes/FormGroup';
import UsersTable from "./UsersTable";

class ViewsUser extends React.Component{

    state ={
        name:"",
        cartel:"",
        id: "",
        users:[]

    }

find = () => {
    var params ='?';

    if(this.state.id != ''){
        if(params != '?'){
            params = `${params}&`;
        }
        params = `${params}id=${this.state.id}`;
    }

    if(this.state.name != ''){
        if(params != '?'){
            params = `${params}&`
        }
        params = `${params}id=${this.state.name}`;
    }

        if(this.state.cartel != ''){
            if(params != '?'){
                params = `${params}&`
            }
            params = `${params}id=${this.state.cartel}`;
        }
    
        axios.get(`http://localhost:8080/api/user${params}`)
        .then( response =>
            {
                const users = response.data;
                this.setState({users});
                console.log(users);
            }
            ).catch(erros => 
                {
                console.log(error.response);
            }
            );
}


    
    delete = (userId)=> {
        axios.delete(`http://localhost:8080/api/lutador/${userId}`
        ).then(response => 
            {
                this.find();
            }
            ).catch(error => 
                {
                    console.log(error.response);
                })
    }

    edit =(userId) => {
        this.props.history.push(`/updateUser/${userId}`)
    }

    render(){
        return(
            <Card title="Consulta Usuários">
                <div className="row">
                    <div className="col-md-6">
                        <div className="bs-component">
                            <FormGroup htmlFor="inputId" label="Id: *">
                                <input type="text"
                                className="form-control"
                                id="inputId"
                                value={this.state.id}
                                onChange={e => this.setState.id({id: e.target.value})}
                                placeholder="Digite o Ano"/>
                            </FormGroup>

                            <FormGroup htmlFor="inputName" label="Name: *">
                                <input type="text"
                                    className="form-control"
                                    id="inputName"
                                    value={this.state.name}
                                    onChange={e => this.setState.id({id: e.target.value})}
                                    placeholder="Digite o Ano"/>
                            </FormGroup>

                            <FormGroup htmlFor="inputCartel" label="Cartel: *">
                                <input type="text"
                                    className="form-control"
                                    id="inputCartel"
                                    value={this.state.cartel}
                                    onChange={e => this.setState.id({id: e.target.value})}
                                    placeholder="Digite o Ano"/>
                            </FormGroup>

                            <button onClick={this.find}
                                    type="button"
                                    className="btn btn-success">
                                    <i className="pi pi-search"></i>  Buscar
                                    </button>

                                    </div>    
                                </div>
                            </div>

                            <div className="row">
                                <div className="col-md-12">
                                    <UsersTable users={this.state.users}
                                        delete={this.delete}
                                        edit={this.edit} />
                                </div>
                            </div>
                        </Card>
        )
    }


}