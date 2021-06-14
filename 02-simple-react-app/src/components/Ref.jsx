import React, {useRef} from 'react';

const Ref = () => {

    const ref = useRef(null);

    const handleRef = () => {

        ref.current.value = "Ahre prro";
        ref.current.select();
    };

    return (
        <div>
            <h1 onClick={handleRef}>useRef</h1>
            <hr />
            <textarea ref={ref} placeholder="Escribe algo prro"></textarea>
        </div>
    )
}

export default Ref;
