class UpdateUser extends React.Component{

    state = {
        id: 1,
        name: "",
        cartel: "",
    }

    
update = () => {
    axios.put(`https://localhost:8080/api/lutador/${this.state.id}`,
    {
    nome: this.state.nome,
    cartel: this.state.cartel
}
    ).then(response =>
        {
            console.log(response)
        }
        ).catch(error =>
            {
                console.log(error.response)
            }
            );
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
  
          <br/>
          <label>O resultado é: {this.state.result}</label>
         </div>
    );
  }


}