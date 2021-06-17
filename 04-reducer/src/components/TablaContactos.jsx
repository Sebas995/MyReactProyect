import React from 'react';

const TablaContactos = ({ contactos = [], dispatch }) => {

    const handleDelete = (id) =>{
        dispatch({
            type: "delete",
            payload: id
        });
    };

    return (
        <table className="table">
            <thead>
                <tr>
                    <th>Id</th>
                    <th>Nombre</th>
                    <th>Numero</th>
                    <th>Acción</th>                   
                </tr>
            </thead>
            <tbody>
                {
                    contactos.map((contacto) => {

                        let id = contacto.id;
                        let finalId = id.split("-")[0];

                        return(
                            <tr key={id}>
                                <th>{finalId}</th>
                                <td>{contacto.nombre}</td>
                                <td>{contacto.numero}</td>
                                <td>
                                    <button key={id} onClick={() => handleDelete(id)} className="btn btn-danger">Eliminar</button>
                                </td>
                            </tr>
                        );
                    })
                }
            </tbody>
        </table>
    )
}

export default TablaContactos;
