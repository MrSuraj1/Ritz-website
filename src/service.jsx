
export default function Service() {
  return (
<>    <section className="bg-gray-100 py-1 px-6">
       <h4 className="text-yellow-700 items-center text-2xl justify-center flex">Service</h4>
      
      <div className="max-w-7xl mx-auto text-center">
       
        <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-2">
          what we provide<br></br>
        </h2>
 <p className="font-2xl  text-gray-700 mb-8">is more then what i provide</p>

        <div className="grid md:grid-cols-3 gap-6">
          {[
            {
              title: "SEO (Serach Engine opmizer)",
              desc: "SEO services help improve your website ranking and visibility on search engines. SEO services help improve your website ranking and visibility on search engines.SEO services help improve your website ranking and visibility on search engines.",
              img: "https://images.pexels.com/photos/18105/pexels-photo.jpg?auto=compress&cs=tinysrgb&h=650&w=940",
            },
            {
              title: "PPC (Google Ads) service",
              desc: "SEO services help improve your website ranking and visibility on search engines. SEO services help improve your website ranking and visibility on search engines.SEO services help improve your website ranking and visibility on search engines.",
              img: "https://images.pexels.com/photos/50987/printer-printing-paper-output-50987.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
            },
            {
              title: "Social Media Management",
              desc: "SEO services help improve your website ranking and visibility on search engines. SEO services help improve your website ranking and visibility on search engines.SEO services help improve your website ranking and visibility on search engines.",
              img: "https://images.pexels.com/photos/50987/printer-printing-paper-output-50987.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
            },
            {
              title: "SEO (Serach Engine opmizer)",
              desc: "SEO services help improve your website ranking and visibility on search engines. SEO services help improve your website ranking and visibility on search engines.SEO services help improve your website ranking and visibility on search engines.",
              img: "https://images.pexels.com/photos/18105/pexels-photo.jpg?auto=compress&cs=tinysrgb&h=650&w=940",
            },
            {
              title: "PPC (Google Ads) service",
              desc: "SEO services help improve your website ranking and visibility on search engines.",
              img: "https://images.pexels.com/photos/50987/printer-printing-paper-output-50987.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
            },
            {
              title: "Social Media Management",
              desc: "lorem is best specail use ",
              img: "https://images.pexels.com/photos/50987/printer-printing-paper-output-50987.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
            },
          ].map((product, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow overflow-hidden hover:shadow-lg transition"
            >
              <p className="text-xl float-left ml-6 font-semibold p-2">0{index+1}</p>
              <div className="p-8 float-left text-gray-400 w-full">
                
                 <hr className="mt-[-20px] mb-2"></hr>
                <h3 className="text-xl float-left font-semibold p-2 text-gray-900">
                  {product.title}
                </h3><br></br>
              
            <p className="mt-2 text-gray-600 float-left flex ml-2 text-left ">{product.desc}</p>
            
            <button type="button" className="text-xl   mt-2 text-gray-900 float-left flex ml-2 text-left">More,  <span className="  "> → </span></button>
            
            </div>
              <img
                src={product.img}
                alt={product.title}
                className="h-48 w-full object-cover"
              />
              
            </div>
          ))}
        </div>
      </div>
    </section>
</>  );
}
