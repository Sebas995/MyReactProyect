import React from 'react';

// Leer mas de esto 
const Dato = ({value}) => {

    console.log("Cargado prro");

    return (
        <p>
          {value}  
        </p>
    )
};

export default React.memo(Dato);
