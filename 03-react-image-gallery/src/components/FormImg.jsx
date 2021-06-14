import React from 'react';
import PropTypes from 'prop-types';

//Los props por lo general entran en llaves
const FormImg = ({handleSubmit}) => {

    return (
        <>
            <form onSubmit={handleSubmit}>
                <label className="w-75">Buscar : <input className="w-75 mx-1" type="text" name="inputText"/></label>
                <button type="submit" className="btn btn-warning"><span className="material-icons">Search</span></button>
            </form>
        </>
    )
}

FormImg.propTypes = {
    handleSubmit: PropTypes.func
}

export default FormImg;
