import { useCounter } from "../hooks/useCounter";

const Custom = () => {

    const [counter, increment, decrement] = useCounter(15, 7);

    return (
        <>
            <h1>Custom Hook: {counter}</h1>
            <hr />

            <button onClick={increment}>+1</button>
            <button onClick={decrement}>-1</button>
        </>
    )
}

export default Custom;
