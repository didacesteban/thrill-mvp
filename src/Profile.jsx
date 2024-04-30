import React from "react";

export default function Profile() {
  return (
<section className="">
<div className="w-full lg:w-4/12 px-4 mx-auto">
  <div className="flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-xl rounded-lg mt-24">
    <div>
      <div className="flex flex-wrap">
        <div className="w-full px-4 flex  bg-indigo-100 relative w-full h-48 flex flex-col items-center justify-end">
          <div className="absolute bottom-20">
            <img style={{ border: "4px solid #e1e8fe"}} src="https://pbs.twimg.com/profile_images/675440006870261760/nWA4xWwo_400x400.jpg" className="shadow-xl rounded-full h-auto align-middle border-2 border-indigo-100 w-48 h-48" />
          </div>
          <div className="w-full text-center">
            <div className="flex py-4 bg-indigo-100 text-indigo-950 flex justify-between items-center p-4">
              <div>
                <span className="text-xl font-bold block uppercase tracking-wide text-orange-500">
                  98%
                </span>
                <span className="text-sm text-indigo-950">Actuación</span>
              </div>
              <div>
                <span className="text-xl font-bold block uppercase tracking-wide text-orange-500">
                  70%
                </span>
                <span>Compromiso</span>
              </div>
              <div>
                <span className="text-xl font-bold block uppercase tracking-wide text-orange-500">
                  100%
                </span>
                <span className="text-sm text-indigo-950">Satisfación</span>
              </div>
            </div>
        </div>
        </div>
      </div>
      <div className="text-center mt-12">
        <h3 className="text-xl font-semibold leading-normal mb-2 text-indigo-950 mb-2">
          Ronaldo de Assis Moreira
        </h3>
        <div className="text-sm leading-normal mt-0 mb-2 text-indigo-950 font-bold uppercase">
          <i className="fas fa-map-marker-alt mr-2 text-lg text-indigo-950"></i>
          Porto Alegre, Brazil
        </div>
        <div className="mb-2 text-indigo-950">
          <i className="fas fa-briefcase mr-2 text-lg text-indigo-950"></i>
          Mago
        </div>
      </div>
      <div className="mt-10 py-10 border-t border-indigo-200 text-center">
        <div className="flex flex-wrap justify-center">
          <div className="w-full lg:w-9/12 px-4">
            <p className="mb-4 text-lg leading-relaxed text-indigo-950">
              Artista del balón, mago de sonrisas y creador de ilusiones. 
              <br/>
              Ronaldinho debutó en las categorías inferiores de la selección brasileña en abril de 1995, cuando solo tenía 15 años. Dos años después se adjudicaría la Copa Mundial Sub-17.
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
</section>
  );
}
