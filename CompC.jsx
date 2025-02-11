// import React from 'react'
// import {user ,id} from './CompA.jsx'
// const Compc = () => {
//   return (
//     <div>
//         <user.Consumer >

//             {

//             (name) => {
//                 return(
//                     <>
//                     <id.Consumer>
//                         {
//                          (num) => {
//                             return(
//                                 <h1> my name is {name} and id is {num}</h1>

//                             )
//                          }
//                         }
//                     </id.Consumer>
//                     </>
            
//              )
//             }
//             }
//         </user.Consumer>
//     </div>
//   )
// }

// export default Compc
import React, { useContext } from 'react'
import {userName,id} from './CompA'

const Compc = () => {
    let user = useContext(userName)
    let id = useContext(id)
  return (
    <div>
<h1>{user} and {id}</h1>

    </div>
  )
}

export default Compc