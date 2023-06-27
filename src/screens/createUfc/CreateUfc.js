import React from "react";
import "./CreateUfc.css";
import Card from "../../components/Card";
import FormGroup from "../../components/FormGroup";
import axios from "axios";

export default class CreateUfc extends React.Component{

    state = {
        edicao: ' ',
        lutador1:' ',
        lutador2:' '
    }

create = async() => {

        const lutador11 = await axios.get(`http://localhost:8080/api/lutador/${this.state.lutador1}`)
        const lutador22 = await axios.get(`http://localhost:8080/api/lutador/${this.state.lutador2}`)
      
       await axios.post('http://localhost:8080/api/ufc',
       {
              edicao: this.state.edicao,
              lutaPrincipal: [
                  {
                      id: this.state.lutador1,
                      nome: lutador11.nome,
                      cartel: lutador11.cartel
                  },
                  {
                      id: this.state.lutador2,
                      nome: lutador22.nome,
                      cartel: lutador22.cartel
                  }
            
              ]
       }
       ).then(response => 
        {
          console.log(response);
        //  showSuccessMessage("UFC salvo com sucesso");
      
        }
        ).catch(error => 
          {
          //  showErrorMessage("UFC não pôde ser salvo")
            console.log(error.response);
          });
          console.log('request finished');
      }
   
      cancel = () =>{
        this.props.history.push("/");
      }

      render(){
        return(
        <div className="container">
            <Card title="Cadastro de Ufc">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="bs-component">
                            <FormGroup label="Edição: *" htmlFor="inputEdicao">
                                <input type="Number" 
                                id="inputEdicao"
                                className="form-control"
                                edicao="edicao"
                                onChange={e => this.setState({edicao: e.target.value})}>
                                </input>
                            </FormGroup>
                            <FormGroup label="Lutador1: *" htmlFor="inputLutador1">
                                <input type="Number" 
                                id="inputLutador1"
                                className="form-control"
                                edicao="lutador1"
                                onChange={e => this.setState({lutador1: e.target.value})}>
                                </input>
                            </FormGroup>
                            <FormGroup label="Lutador2: *" htmlFor="inputLutador2">
                                <input type="Number" 
                                id="inputLutador2"
                                className="form-control"
                                edicao="lutador2"
                                onChange={e => this.setState({lutador2: e.target.value})}>
                                </input>
                            </FormGroup>
                            <button onClick={this.create} type="button" className="btn btn-success">
                                <i className="pi pi-save"></i> Salvar
                            </button>
                            <button onClick={this.cancel} type="button" className="btn btn-danger">
                                <i className="pi pi-cancel"></i> Cancelar
                            </button>
                        </div>
                    </div>
                </div>
            </Card>
        </div>
        )
      }

}