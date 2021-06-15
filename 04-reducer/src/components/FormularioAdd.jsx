import React from 'react';

const FormularioAdd = () => {
    return (
        <div className="container">
            <label className="mx-1 d-grid gap-2">
                <b>Nombre: </b><input type="text" className="form-control" autoComplete="off"/>
            </label>
            <label className="mx-1 d-grid gap-2">
                <b>Numero: </b><input type="text" className="form-control" autoComplete="off"/>
            </label>
            <div className="mx-1 d-grid gap-2">
                <button className="btn btn-info mt-2">Agregar</button>
            </div>
        </div>
    )
}

export default FormularioAdd;
