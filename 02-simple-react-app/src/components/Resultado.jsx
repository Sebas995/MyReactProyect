import React from 'react';
import PropTypes from 'prop-types';

const Resultado = ({accion, resultado}) => {

    return (
        <>
            <br />
            <span>{accion}: {resultado}</span>
        </>
    )
}

Resultado.propTypes = {
    accion: PropTypes.string,
    resultado: PropTypes.number
}

export default Resultado;
