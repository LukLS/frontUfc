import React from 'react';
import './App.css';
import axios from 'axios';


export default class App extends React.Component {

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
        <button onClick={this.save}>Salvar lutador</button>

       </div>
  );
}
*/

state ={
  edicao: ' ',
  lutador1:' ',
  lutador2:' ',
}



save = async() => {

  const lutador11 = await axios.get(`http://localhost:8080/api/lutador/${this.state.lutador1}`)
  const lutador22 = await axios.get(`http://localhost:8080/api/lutador/${this.state.lutador2}`)
  console.log("LUTADOR "+lutador11+lutador22)

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
      <label>edicao</label>
      <input type="text" value={this.state.edicao} onChange={(e) => {this.setState({edicao: e.target.value})}} />
      <br/>
      <label>Lutador 1</label>
      <input type="Number" value={this.state.lutador1} onChange={(e) => {this.setState({lutador1: e.target.value})}} />
      <br/>
      <label>Lutador 2</label>
      <input type="Number" value={this.state.lutador2} onChange={(e) => {this.setState({lutador2: e.target.value})}} />     
      <br/> 
      <button onClick={this.save}>Salvar lutador</button>
      <br/>
     </div>
);
}


}
