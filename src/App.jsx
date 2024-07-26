import React, { useEffect, useRef } from 'react'
import gsap from 'gsap';
function App() {
 const cursorRef = useRef(null);
 const mainRef = useRef(null);
 const imageRef = useRef(null);
 useEffect(() => {
   const cursor=cursorRef.current;
   const main=mainRef.current;
   const image=imageRef.current;
   const handleMouseMove = (events) =>{
    gsap.to(cursor,{
      x:events.clientX,
      y:events.clientY
    })
   }
   const handleScaleMouse = () =>{
    cursor.innerHTML="View More";
    gsap.to(cursor,{
      scale:4
    })
   }
   const handleScaleLossMouse = () =>{
    cursor.innerHTML="";
    gsap.to(cursor,{
      scale:1
    })
   }
   main.addEventListener("mousemove",handleMouseMove);
   image.addEventListener("mousemove",handleScaleMouse);
   image.addEventListener("mouseleave",handleScaleLossMouse);
   return () => {
    main.removeEventListener("mouseleave",handleMouseMove);
    image.removeEventListener("mousemove",handleScaleMouse);
    image.removeEventListener("mouseleave",handleScaleLossMouse); 
  }
 }, [])
 
  return (
    <div id='main' ref={mainRef}>
      <div id="cursor" ref={cursorRef} ></div>
      <div id="image" ref={imageRef}>
        <div id="overlay"></div>
        <img src="https://images.unsplash.com/photo-1721928316482-fd46b52d4ae5?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
      </div>
    </div>
  )
}

export default App