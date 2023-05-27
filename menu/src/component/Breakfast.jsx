import { data } from "./data"


function Breakfast (){
    return(
        <>
        <h2>This is breakfast</h2>
        <div className="flex">
            {
                [...data].splice(0,3).map((each) => {
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
export default Breakfast