import {useState, useMemo, useCallback} from 'react';

export const useMemorizeSebas = () => {

    const [counter, setCounter] = useState(0);
    const [view, setView] = useState(true);
    const pesado = (iter) => {
        for (let i = 0; i < iter; i++)
            console.log("procesando");
        
        return "Fin del proceso";
    };
    
    const pesadoMemo = useMemo(() => pesado(counter), [counter]);
    
    const add = useCallback(() => {
        setCounter((actual) => actual + 1);
    }, [setCounter]);
    
    const hide = useCallback(() => {
        setView(!view)
    }, [setView]);

    return [counter, hide, pesadoMemo, add];
}
