import React, { useReducer } from 'react';
import { ContactosReducer } from '../reducers/ContactosReducer';
import FormularioAdd from './FormularioAdd';
import TablaContactos from './TablaContactos';

const Contactos = () => {

    const [state, dispatch] = useReducer(ContactosReducer, []);

    return (
        <div className="container mt-3">
            <FormularioAdd dispatch={ dispatch }/>
            <TablaContactos contactos={ state } dispatch={ dispatch }/>
        </div>
    )
}

export default Contactos;
