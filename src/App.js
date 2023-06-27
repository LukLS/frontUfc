import React from 'react';
import './App.css';
import 'bootswatch/dist/sketchy/bootstrap.css'

import CreateUfc from './screens/createUfc/CreateUfc';
import Navbar from './components/NavBar';
import Login from './screens/home/Home';
import AppRoutes from './main/AppRoutes';
import AppRoutes2 from './main/AppRoutes2';
import Navbar2 from './components/NavBar2';

export default class App extends React.Component {


  render(){
    return(
      <div>
        <Navbar2/>
        <AppRoutes2/>
      </div>
    )
  }

/*

  state ={
    nome: ' ',
    cartel:' ',
  }
  save = async() => {

   await axios.post('http://localhost:8080/api/lutador',
   {
    nome: this.state.nome,
    cartel: this.state.cartel
   }
   ).then(response => 
    {

      console.log(response);
      // eslint-disable-next-line no-undef
      showSuccessMessage("Lutador cadastrado")
    }
    ).catch(error => 
      {
        console.log(error.response);
      });
      console.log('request finished');
  }

  render() {
  return (
    <div className="App">
        <label>nome</label>
        <input type="text" value={this.state.nome} onChange={(e) => {this.setState({nome: e.target.value})}} />
        <br/>
        <label>cartel</label>
        <input type="text" value={this.state.cartel} onChange={(e) => {this.setState({cartel: e.target.value})}} />
        
        <br/>
        <div class="progress">
        <div class="progress-bar progress-bar-striped progress-bar-animated progress-bar-local" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100" ></div>
        </div>
        <br/>
          <button onClick={this.save} className="btn btn-primary">Salvar Lutador</button>

       </div>
  );
}


state ={
  edicao: ' ',
  lutador1:' ',
  lutador2:' ',
}



save = async() => {

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

render() {
return (
  <div className="App">
      <div className='col-md-6' style={this.styles.colMd6} >
      <label>edicao</label>
      <input type="text" value={this.state.edicao} onChange={(e) => {this.setState({edicao: e.target.value})}} />
      <br/>
      <label for="lutador1"> Lutador 1</label>
      <input type="Number" value={this.state.lutador1} onChange={(e) => {this.setState({lutador1: e.target.value})}} />
      <br/>
      <label>Lutador 2</label>
      <input type="Number" value={this.state.lutador2} onChange={(e) => {this.setState({lutador2: e.target.value})}} />     
      <br/> 
      <br/>
      <div class="progress">
      <div class="progress-bar progress-bar-striped progress-bar-animated progress-bar-local" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100" ></div>
      </div>
      <br/>
      <button onClick={this.save} className="btn btn-primary">Salvar UFC</button>
      <br/>
     </div>
     </div>
);
}

*/

}
