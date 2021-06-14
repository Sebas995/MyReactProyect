import {useEffect, useState} from 'react';

const Effect = () => {

    const [state, setState] = useState(0);

    useEffect(() => {
        //El return el nos useEffect sirve para no crear bluckles
        return () => {

        };
    }, [state])

    const handleSubmit = (e) => {
        //Evita que se recargue la pagina cuando el form tien un submit preventDefault()
        e.preventDefault();
    };

    return (
        <>
            <h1>useEffect</h1>
            <hr />

            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">Search</label>
                    <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </>
    )
}

export default Effect;
