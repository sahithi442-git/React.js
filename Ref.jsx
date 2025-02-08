// import React from 'react'

// const Ref = () => {
//     let demo = document.getElementById("demo")
//     console.log(demo);
//     demo.style.backgroundColor = "red"
//   return (
//     <div>
//         <h1 id ='demo'>Hello world!</h1>
//     </div>
//   )
// }

// export default Ref

import React, {useRef} from 'react'

const Ref = () => {
    let demo = useRef()
    console.log(demo);
    console.log(demo.current);
    demo.current.style.backgroundColor = "yellow"
  return (
    <div>
        <h1 ref={demo}>hello</h1>
    </div>
  )
}
export default Ref