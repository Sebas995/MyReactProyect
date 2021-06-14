// import {useState, useEffect, useLayoutEffect} from 'react';

// const LayoutEffect = () => {

//     const [data, setData] = useState([]);
//     const [length, setLength] = useState(0);
//     const newData = [
//         {
//             name: "Ahre",
//             email: "ahre@gmail.com"
//         }
//     ];

//     useEffect(() => {
//         setTimeout(() => {
//             setData(newData);
//             console.log(data)
//         }, 2000);
//     }, [])

//     useLayoutEffect(() => {
//         setLength(data.length);
//     }, []);

//     return (
//         <>
//           <h1>useLayoutEffect</h1>
//           <hr />  
//           <p>Valores </p>
//         </>
//     )
// }

// export default LayoutEffect;
