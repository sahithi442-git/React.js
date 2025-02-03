// import React from "react"
// class Child extends React.Component{
//     render()
//     {
//         return (
//             <>
//               <h1>my name is {this.props.name}</h1>
//             </>
//         )
//     }
// }
// export default Child

import React from 'react'

const Child = (props) => {
  return (
    <div>
        <h1> my name is {props.name}</h1>
    </div>
  )
}

export default Child