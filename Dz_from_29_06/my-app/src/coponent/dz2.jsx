import React, { useState } from "react";
const DivColor=()=>{

document.addEventListener('click',Cklick)
 const block=document.querySelector('.gray')
  function  Cklick(e){

    const newClass = e.target.className
      block.className=newClass
    }


    return(
        <div className='flex'>
            <div className='red all'/>
            <div className='blue all'/>
            <div className='green all'/>
            <div className='gray all'/>

        </div>
    )
}

export default DivColor