import { Link } from "react-router-dom";

export default function Landscap(){

return(<>
    <div className="flex justify-center items-center w-full h-full mt-7 p-22">
    <h1 className="text-center font-bold text-4xl  ">  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi deleniti eligendi fugit at est dolore temporibus odit quoratione <br></br>  provident debitis, deserunt reiciendis dolor!  </h1>
    </div>
    <br></br>
    <div className="flex justify-center items-center w-full h-full mt-[-200px] p-28">
    <h3 className="text-center font-light text-2xl  ">We design digital strategies that balance reach and relevance, combining performance marketing, data insights, and platform intelligence to drive sustained visibility, intent, and measurable business growth.</h3>

    </div>
    <div className="flex justify-center items-center w-full h-full mt-[-200px] p-28">
            <br></br><Link to='/ddd' className="text-2xl">Contact US <span className="ml-1 h-40 w-40 p-2 bg-yellow-600 text-xl rounded-full">→</span></Link>
    </div>
      
      <div className="flex justify-center items-center  h-full mt-[-190px] p-28">
            <br></br><img src="https://ritzmediaworld.com/4th_floor_rmw/home/banner/bn2.jpg"
            className="w-full "
            ></img>
    </div>
      
    </>)


}

