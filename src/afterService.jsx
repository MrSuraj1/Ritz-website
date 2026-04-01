import image1 from './assets/afterServ.jpg'
export default function AfterService(){


    return(<>
         <section className="bg-gray-100 py-6 mt-10 px-6">
       <h4 className="text-yellow-700 items-center text-2xl justify-center flex">Exlaence</h4>
      
      <div className="max-w-7xl mx-auto text-center">
       
        <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-2">
          why leading brand choose our company in india<br></br>
        </h2>
 <p className="font-3xl font-medium  text-gray-700 mb-8">built for inovation and choose for result</p>

        <div className="flex ">
           <img 
           className="w-[860px] h-80 float-left"
           src={image1}></img>
         <div className="bg-blue-950 w-[400px] h-80 float-right ml-4"> 

            <p className="text-white p-8 text-2xl py-10 text-left">FACTS & NUMBER"S</p>
                <br></br>   <h1 className="text-white text-6xl text-left ml-5">89%</h1>  
        <p className="text-white ml-5 mt-2 text-xl font-ligter text-left">To recommmended to Customer</p>
        <p className="text-2xl ml-5 mt-1 text-white font-bold text-left">RIZA MEDIA WORLD</p>
            <p className="text-white ml-5 mt-2 text-xl font-ligter text-left">Service</p>
        </div>
       

        </div>
      </div>
    </section>

        </>)
}