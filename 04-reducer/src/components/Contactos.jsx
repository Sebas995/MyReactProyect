import React from 'react';
import FormularioAdd from './FormularioAdd';
import TablaContactos from './TablaContactos';

const Contactos = () => {

    const contactos = [
        {
            id: "hobbs", 
            nombre: "Perisha",
            numero: "654654"
        },
        {
            id: "hobbs1", 
            nombre: "Perisha11",
            numero: "96789"
        },
        {
            id: "hobbs2", 
            nombre: "Perisha22",
            numero: "4353456"
        }
    ];

    return (
        <div className="container mt-3">
            <FormularioAdd/>
            <TablaContactos contactos={ contactos }/>
        </div>
    )
}

export default Contactos;
