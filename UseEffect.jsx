// import React, { useEffect, useState } from 'react';

// const Counter = () => {
//     let [state, setState] = useState(0);

//     useEffect(() => {
//         const timer = setTimeout(() => {
//             setState(state + 1);
//         }, 2000);

//         return () => clearTimeout(timer); 
//     }, [state]); 

//     return (
//         <div>
//             <h1>{state}</h1>
//         </div>
//     );
// };
// export default Counter;

// import React, { useEffect, useState } from 'react'

// const UseEffect = () => {
//     let [state , setState] = useState(0)
//     let [Incr , setIncr] = useState(0)

//     useEffect ( () => {
//         setIncr(state * 2)


//     } , [state] )
//   return (
//     <div>
//       <h1>state. : {state} </h1>
//       <h1>incr : {Incr}</h1>
//       <button onClick={()=> setState((c) => c+1)}>click</button>
//     </div>
//   )
// }

// export default UseEffect
import React,{useEffect, useState} from 'react'
import "./useeffect.css"


const Useeffect = () => {
    let [state,setState] = useState([])

    useEffect(() => {
        window.fetch("https://fakestoreapi.com/products")
        .then((x) => x.json())
        .then((res) => setState(res))
    })
  return (
    <div>
        <table>
            <thead>
                <tr>
                    <th>id</th>
                    <th>price</th>
                    <th>image</th>
                </tr>
            </thead>
        </table>
        {
            state.map((data) => {
                console.log(data);
                return(
                    <>
                     <tr>
                        <td>{data.id}</td>
                        <td>{data.price}</td>
                        <td><img src={data.image} alt="" /></td>
                     </tr>
                    </>
                )
            })
        }
    </div>
  )
}
export default Useeffect