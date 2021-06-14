import React from 'react';
import { useMemorizeSebas } from '../../hooks/useMemorizeSebas';
import Btn from './Btn';
import Dato from './Dato';

const Memorize = () => {   

    const [counter, hide, pesadoMemo, add] = useMemorizeSebas();

    return (
        <>
          <h1>Memorizes: <Dato value={counter}/></h1>
          <hr />

          <pre>{pesadoMemo}</pre>
          
          <Btn add={add}/>
          <button onClick={hide}>Ver/Quitar</button>
        </>
    )
}

export default Memorize;
