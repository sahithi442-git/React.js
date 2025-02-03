// import React from "react"
// import Child from "./Child"
// class Parent extends React.Component{
//     obj = {
//         username : "rahul"
//     }
//     render()
//     {
//         return (
//             <>
//               <Child name = {this.obj.username}/>

//             </>
//         )
//     }
// }
// export default Parent


import React from 'react'
import Child from './Child'

const Parent = () => {
  return (
    <div>
       <Child name = "abhi" />
    </div>
  )
}

export default Parent