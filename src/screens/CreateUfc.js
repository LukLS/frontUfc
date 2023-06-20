
create = async() => {
    await axios.post("https://localhost:8080/api/lutador",
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
            console.log('request finished');
}