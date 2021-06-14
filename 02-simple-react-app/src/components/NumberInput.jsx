import {useState} from 'react';
import PropTypes from 'prop-types';
import Resultado from './Resultado';
import { operaciones } from '../helpers/operaciones';

const NumberInput = () => {

    const [numeros, setNumeros] = useState({
        numero1: 0,
        numero2: 0
    });
    const {handleChange, suma, resta, multiplicacion, division, numero1, numero2} = operaciones(numeros,setNumeros);

    return (
        <>
             <label className="mx-2"> Numero 1: <input name="numero1" value={numero1} type="number" onChange={handleChange} /></label>
             <label className="mx-2"> Numero 2: <input name="numero2" value={numero2} type="number" onChange={handleChange} /></label>

            <Resultado accion="Suma" resultado={suma()}/>
            <Resultado accion="Resta" resultado={resta()}/>
            <Resultado accion="Multiplicacion" resultado={multiplicacion()}/>
            <Resultado accion="Division" resultado={division()}/>
        </>
    )
}

NumberInput.propTypes = {
    number: PropTypes.number
}

export default NumberInput;
