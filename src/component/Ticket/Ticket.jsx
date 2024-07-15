import React, { useEffect, useState } from "react";
import "./Ticket.css";
import logo from "./badtalks_linear_logo.png";
import { TicketCheck } from "lucide-react";
import { useParams } from "react-router-dom";

export default function Ticket() {
  const [state, setState] = useState(false)
  const { id } = useParams();
  useEffect(() => {
    console.log(id,'================>')
    if(id){

      setState(true)
    }
  }, [id]);
  if(!id){
    return
  }

  return (
      state &&
      <div className="h-screen -mt-16 w-full overflow-hidden relative z-10 bg-[#000000] gap-12 md:gap-24 text-white flex flex-col md:flex-row md:items-center md:justify-center items-center justify-center">
      <span className="text-8xl md:text-[230px] top-[1%] left-[2%] z-[11] absolute font-extrabold text-neutral-950">
        BAD
      </span>
      <span className="text-8xl md:text-[230px] z-[11]  bottom-[1%] right-[2%] absolute font-extrabold text-neutral-950">
        TALKS
      </span>
      <div className="ticket-card z-20">
        <div className="card-content">
          <div className="back">
            <div className="back-content">
              <TicketCheck size={44} className="rotate-[-12deg]" />
              <strong>Reveal ticket</strong>
            </div>
          </div>
          {
            state ? (
              <div className="front">
            <div className="img">
              <div className="circle"></div>
              <div className="circle" id="right"></div>
              <div className="circle" id="bottom"></div>
            </div>

            <div className="ffront-content">
              <div className="py-1 px-1 w-fit bg-white/20 rounded-2xl ">
                {/* <img src={logo} alt="logo" style={{ height: 16, width: 64 }} />{" "} */}
                <p className="text-xs font-semibold">BAD <span className="text-red-600">_</span>TALKS</p>
              </div>
              <div className="space-y-4">
                <div>
                  <h3 className="text-3xl font-extrabold text-red-500">ID:</h3>
                  <div className="flex flex-col">
                    <span className="text-4xl font-extrabold">
                      {" "}
                      {id ? id : "SHA0876"}
                    </span>
                    <span className="text-4xl font-extrabold"></span>
                  </div>
                </div>

                <div className="description">
                  <div className="title flex flex-col">
                    <p className="title text-red-500">
                      <strong className="">Belongs to :</strong>
                    </p>
                    <p className="title">
                      <strong>example@example.com</strong>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
            ): null
          }
          
        </div>
      </div>
      <div className="space-y-5 z-[20] w-full max-w-[250px] md:max-w-md mx-auto md:mx-0">
        <h2 className="text-2xl font-semibold ">
          Hold onto your hats! <br /> You're officially in for{" "}
          <span className="text-red-600">Bad Talks</span>.
        </h2>
        <article>
          <span className="text-red-600 font-bold text-xl">Venue :</span>
          <p className="font-semibold">Lorem, ipsum. Lorem.</p>
          <p className="font-semibold">Lorem, ipsum. Lorem. odvoubs</p>
        </article>
      </div>
    </div>
  );
}
