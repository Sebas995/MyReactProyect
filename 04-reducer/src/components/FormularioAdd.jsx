import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

const FormularioAdd = ({dispatch}) => {
    
    const [data, setData] = useState({nombre : "", numero : ""});
    const { nombre, numero } = data;

    const handleChange = (e) => {
        setData({
            ...data,
            [e.target.name] : e.target.value
        });
    };

    const actionAdd = {
        type: "add",
        payload: {
            id: uuidv4(),
            nombre,
            numero
        }
    };

    const handleAdd = () => {
        dispatch(actionAdd);
    };

    return (
        <>
            <div className="container">
                <label className="mx-1 d-grid gap-2">
                    <b>Nombre: </b><input onChange={handleChange} name="nombre" type="text" value={nombre} className="form-control" autoComplete="off"/>
                </label>
                <label className="mx-1 d-grid gap-2">
                    <b>Numero: </b><input onChange={handleChange} name="numero" type="text" value={numero} className="form-control" autoComplete="off"/>
                </label>
                <div className="mx-1 d-grid gap-2">
                    <button onClick={handleAdd} className="btn btn-info mt-2">Agregar</button>
                </div>
            </div>
        </>
    )
}

export default FormularioAdd;
