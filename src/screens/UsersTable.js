import React from "react";

export default props => {

    const rows = props.users.map(user => {
        return(
            <tr key={user.id}>
                <td>{user.id}</td>
                <td>{user.nome}</td>
                <td>{user.cartel}</td>
                <td>
                    <button tupe="button" title="Editar"
                    className="btn btn-primary"
                    onClick={e => props.edit(user.id)}>
                        <i className="pi pi-pencil"></i>
                    </button>
                    <button type="button" title="Excluir"
                    className="btn btn-danger"
                    onClick={e => props.delete(user.id)}>
                    <i className="pi pi-trash"></i>
                    </button>
                </td>
            </tr>
        )
    })





    return(
        <table className="Table table-hover">
            <thead>
                <tr>
                    <th scope="col">Id</th>
                    <th scope="col">Nome</th>
                    <th scope="col">Cartel</th>
                </tr>
            </thead>
            <tbody>
                {rows}
            </tbody>
        </table>
    )
    
}