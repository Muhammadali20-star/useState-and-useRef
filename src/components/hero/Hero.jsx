// import React, {useState, useRef} from 'react'

// const Hero = () => {
//     const [text, setText] = useState("Hello world")
//     const titleEI = useRef(null)
   
//     const hendlState = () =>{
//         setText("salom dunyo")
//     }

//     const hendlRef = () =>{
//         titleEI.current.innerHTML = "salom dunyo"
//     }

//   return (
//     <div>
//       <hr />
//       <p ref={titleEI}>Hello world</p>
//       <button onClick={hendlRef}>change (ref)</button>
//       <hr />
//       <p>{text}</p>
//       <button onClick={hendlState}>change (state)</button>
//       <hr />
//     </div>
//   )
// }

// export default React.memo(Hero)