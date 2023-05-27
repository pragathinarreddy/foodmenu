import React from 'react'
import { data } from './data'


function Shakes() {
  return (
    <>
    <h2>These are shakes</h2>
<div className='flex'>
            {
               [...data].splice(2,5).map((each,index) =>{
                    console.log(each)
                    return(
                        <article className=" article  ">
                        <div className="flex"> 
                        <img className="ima " src={each.img} alt="" />

                        </div >
                        <div  className="text  ">
                         <div className="title">
                        <h2>{each.title}</h2>
                        <h2 className="price">{each.price}</h2>

                        </div>
                        <hr className="line"></hr>
                        <p>{each.desc}</p>

                        </div>
                        
                    </article>
 
                    )
                })
            }
        </div>
    </>
    

    
  )
}

export default Shakes