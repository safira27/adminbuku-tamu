import React from "react";
import Link from "next/link";


const Body = () => {
  return (
    
    <div>
        <script src="https://cdn.tailwindcss.com"></script>
       <script src="https://cdn.tailwindcss.com?plugins=forms,typography,aspect-ratio,line-clamp"></script>

      {/* <meta charSet="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      {/* <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin /> */}
      <link
        href="https://fonts.googleapis.com/css2?family=Jaldi&display=swap"
        rel="stylesheet"
      />
      <title>Dasboard</title>
      



     
      <div>
        
      </div>
      <div className=" bg-cover bg-[url('../batik1.jpg')]">
      <div className="top-1 left-2 fixed ">
        <img className src="./smknlogo 4.png" alt />
      </div>
      <div className="min-h-screen m-20 bg-gray-100  flex justify-center items-center">
        <div className>
          <div className=" justify-center items-center space-x-5">
            <h1 className="leading-relaxed text-8xl text-center font-extrabold text-transparent bg-clip-text bg-gradient-to-r to-red-600 from-red-900">
              BUKU TAMU <br />
              SMK NEGERI 1 BANYUWANGI
            </h1>
            <p className="text-4xl mt-2 text-center">
              SILAHKAN ISIKAN FORMULIR TERLEBIH DAHULU
            </p>
          </div>
          <div className="flex justify-around my-14">
            <div className="p-6 mx-10 bg-white rounded-xl shadow-xl hover:shadow-2xl hover:scale-105 transition-all transform duration-500">
              <h1 className="text-3xl mb-3 font-bold text-center text-gray-700">
                Regrestrasi Tamu
              </h1>
              <div
                id="foto"
                className="flex m-auto w-64 h-60 text-center  object-cover rounded-t-md overflow-hidden py-1 bg-white"
              >
                <img
                  src="https://i.pinimg.com/564x/8d/ff/49/8dff49985d0d8afa53751d9ba8907aed.jpg"
                  alt
                />
                
                
              </div>
              <Link href="/formulir">
                <button type="button" className="w-80 my-10 text-center text-2xl block m-auto font-semibold py-3 px-6 text-grey-400 hover:text-white  hover:scale-105 bg-slate-400 rounded-lg shadow hover:shadow-md transition duration-300">
                  Lihat Data
                </button>
              </Link>


            </div>
            
          </div>
        </div>
      </div>

      </div>

      
    </div>
  );
};

export default Body;
