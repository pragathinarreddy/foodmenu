import { data } from "./data"


function Lunch (){
    console.log(data,"lunch")
    return(
        <>
        <h2>This is lunch</h2>
         <div className="flex">
            {
               [...data].splice(1,5).map((each) =>{
                    console.log(each,"this is lunch console")
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
export default Lunch