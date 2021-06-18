import React, { useReducer, useEffect, useState } from 'react';
import { ContactosReducer } from '../reducers/ContactosReducer';
import FormularioAdd from './FormularioAdd';
import TablaContactos from './TablaContactos';

const init = () => {
    const contactos = localStorage.getItem("contactos");

    return contactos != null ? JSON.parse(contactos) : [];
};

const Contactos = () => {

    const [state, dispatch] = useReducer(ContactosReducer, [], init);
    const [formView, setformView] = useState(false);

    useEffect(() => {
        localStorage.setItem("contactos", JSON.stringify(state));
    }, [state]);

    return (
        <div className="container mt-3">

            <button className="btn btn-success" onClick={ () => setformView(!formView) }>{ formView ? "-" : "+" } Agregar Contacto</button>

            {
                formView && <FormularioAdd dispatch={ dispatch }/> 
            }
            
            <TablaContactos contactos={ state } dispatch={ dispatch }/>
        </div>
    )
}

export default Contactos;
