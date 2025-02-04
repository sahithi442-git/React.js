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


// import React from 'react'
// import Child from './Child'

// const Parent = () => {
//   let obj1 = {
//     name : "Meghana" ,
//     id : 1 ,
//     designation : "developer"
//   }
//   return (
//     <div>
//         {/* <Child name = "Meghu" /> */}
//         {/* <Child id = {10} /> */}
//         {/* <Child arr = {[10 , 20 , 30 , 40]} /> */}
//         <Child obj = { obj1 } />
//     </div>
//   )
// }

// export default Parent

import React from 'react'
import Child from './Child'

const Parent = () => {
  let demo = () => {
    window.alert("iam arrow function")
  }
  return (
    <>
      <Child fun = {demo} />
    </>
  )
}

export default Parent