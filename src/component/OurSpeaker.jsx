import React from "react";
import ayush from "../assets/Ayushyadav.png";
import dhir from "../assets/DhirendraSingh.jpg";
import rounak from "../assets/ROUNAK.jpg";
export default function OurSpeaker() {
  return (
    <main className="h-full  w-full py-60 px-4 lg:px-24 space-y-24">
      {/* first section */}
      <section className=" relative w-full flex flex-col lg:flex-row gap-4 py-24 px-4 lg:px-12 justify-start bg-pink-500 rounded-3xl">
     
        <div className="flex gap-4 flex-col md:w-full lg:w-full lg:max-w-2xl ">
          <div className="relative">
            <span className="h-[1px] w-32 bg-white absolute -top-2 -left-8" />
            <h2 className="text-white font-bold text-3xl">Ayush yadav</h2>
            <p className="py-1 text-red-900 font-semibold">
              ( UX Design & Growth Lead )
            </p>
          </div>
          <p className="  text-neutral-300 leading-relaxed text-xs md:text-base">
            Ayush Yadav is a multidisciplinary designer and creator with
            experience across industries like manufacturing, food products,
            education, shipping, entertainment, and health. He has promoted
            campaigns for Mx Player, Alt Balaji, Amazon Prime, and Ubon, and
            worked with various startups. His work has been featured on
            platforms like Social Samosa, Social Media Dissect, Eat My News,
            Bihari No. 1, and Men's XP. Services include graphic design, logo
            design, UX research, public speaking, and visual design. He has held
            roles such as User Experience Lead at Habuild, Design Mentor at
            ADPList.org, and Head of Design at Fides and Spes.
          </p>
        </div>
     
      </section>
      {/* second section */}
      <section className=" relative w-full flex flex-col gap-4 py-24 px-4 lg:px-12 justify-center bg-blue-500 rounded-3xl">
        <div className="flex gap-4 flex-col w-full max-w-2xl">
          <div className="relative">
            <span className="h-[1px] w-32 bg-white absolute -top-2 -left-8" />
            <h2 className="text-white font-bold text-3xl">Dhirendra Singh</h2>
            <p className="py-1 text-red-900 font-semibold">
              ( Director, Virina Foundations )
            </p>
          </div>
          <p className="text-neutral-300 leading-relaxed text-xs md:text-base">
            Dhirendra Singh is currently associated with 2 Companies and is
            director with Virina Welfare Foundation. As a Managing Director with
            Pragati Mantra Private Limited.
          </p>
          <p className="text-neutral-300 leading-relaxed text-xs md:text-base">
            Virina Welfare Foundation (VWF) is a Private Not For Profit Company
            incorporated in India on 16 September 2021 .
          </p>
          <>
            <h4 className="text-white font-semibold text-base">
              Some of there work for women empowerment :
            </h4>

            <ul className="list-disc text-xs md:text-base">
              <li className="text-neutral-300 leading-relaxed">
                • 300,000 Sanitary pads distributed to improve health outcomes
                and reduce absenteeism.
              </li>
              <li className="text-neutral-300 leading-relaxed">
                • 700+TB patients supported with essential resources.
              </li>
              <li className="text-neutral-300 leading-relaxed">
                • 10,000+Girls empowered to return to education with confidence.
              </li>
              <li className="text-neutral-300 leading-relaxed">
                • 900+ Women trained in producing high-quality sports goods,
                with exports reaching international markets.
              </li>
            </ul>
          </>
        </div>
        <div className="h-96 w-fit  max-h-96 absolute right-28 top-1/4 -translate-y-1/2 scale-[2.1]">
          <img src={dhir} alt="dhir" className="h-full w-full absolute" />
        </div>
      </section>

      <section className="w-full flex flex-col gap-4  py-24 px-4 lg:px-12 px justify-center bg-red-500 rounded-3xl ">
        <div className=""></div>
        <div className="flex gap-4 flex-col w-full max-w-2xl">
          <div className="relative">
            <span className="h-[1px] w-32 bg-white absolute -top-2 -left-8" />
            <h2 className="text-white font-bold text-3xl">Raunak Anand</h2>
            <p className="py-1 text-red-900 font-semibold">
              ( Unseen, MP, 104k+ Followers )
            </p>
          </div>
          <p className="text-neutral-300 leading-relaxed text-xs md:text-base">
            Rounak Anand is a self-taught content creator, video producer and
            content marketer with 6+ years of experience who wants to make this
            world 1% better using the art of storytelling. He has worked with
            big shot brands like Netflix, Prime Video, MX Player, Meesho and
            successful creators like Tech Burner and Think School.
          </p>
          <p className="text-neutral-300 leading-relaxed">
            {" "}
            Experienced in content production and social media tactics, he
            started India's first state oriented infotainment channel - Unseen
            MP. With just 80 videos, he has already crossed 115K+ followers and
            garnered over 50M+ views.{" "}
          </p>
        </div>
      </section>
      {/* fourth section */}
      <section className="w-full flex flex-col gap-4 py-24 px-4 lg:px-12 justify-center bg-purple-500 rounded-3xl">
        <div className="flex gap-4 flex-col w-full max-w-2xl">
          <div className="relative">
            <span className="h-[1px] w-32 bg-white absolute -top-2 -left-8" />
            <h2 className="text-white font-bold text-3xl">Ayush yadav</h2>
            <p className="py-1 text-red-900 font-semibold">
              ( UX Design & Growth Lead )
            </p>
          </div>
          <p className="text-neutral-300 leading-relaxed text-xs md:text-base">
            Ayush Yadav is a multidisciplinary designer and creator with
            experience across industries like manufacturing, food products,
            education, shipping, entertainment, and health. He has promoted
            campaigns for Mx Player, Alt Balaji, Amazon Prime, and Ubon, and
            worked with various startups. His work has been featured on
            platforms like Social Samosa, Social Media Dissect, Eat My News,
            Bihari No. 1, and Men's XP. Services include graphic design, logo
            design, UX research, public speaking, and visual design. He has held
            roles such as User Experience Lead at Habuild, Design Mentor at
            ADPList.org, and Head of Design at Fides and Spes.
          </p>
        </div>
      </section>
      {/* fifth section */}
      <section className="w-full flex flex-col gap-4 py-24 px-4 lg:px-12 justify-center bg-emerald-500 rounded-3xl">
        <div className="flex gap-4 flex-col w-full max-w-2xl">
          <div className="relative">
            <span className="h-[1px] w-32 bg-white absolute -top-2 -left-8" />
            <h2 className="text-white font-bold text-3xl">Ayush yadav</h2>
            <p className="py-1 text-red-900 font-semibold">
              ( UX Design & Growth Lead )
            </p>
          </div>
          <p className="text-neutral-300 leading-relaxed text-xs md:text-base">
            Ayush Yadav is a multidisciplinary designer and creator with
            experience across industries like manufacturing, food products,
            education, shipping, entertainment, and health. He has promoted
            campaigns for Mx Player, Alt Balaji, Amazon Prime, and Ubon, and
            worked with various startups. His work has been featured on
            platforms like Social Samosa, Social Media Dissect, Eat My News,
            Bihari No. 1, and Men's XP. Services include graphic design, logo
            design, UX research, public speaking, and visual design. He has held
            roles such as User Experience Lead at Habuild, Design Mentor at
            ADPList.org, and Head of Design at Fides and Spes.
          </p>
        </div>
      </section>
      {/* sisth */}
      <section className="w-full flex flex-col gap-4 py-24 px-4 lg:px-12 justify-center bg-rose-500 rounded-3xl">
        <div className="flex gap-4 flex-col w-full max-w-2xl">
          <div className="relative">
            <span className="h-[1px] w-32 bg-white absolute -top-2 -left-8" />
            <h2 className="text-white font-bold text-3xl">Ayush yadav</h2>
            <p className="py-1 text-red-900 font-semibold">
              ( UX Design & Growth Lead )
            </p>
          </div>
          <p className="text-neutral-300 leading-relaxed text-xs md:text-base">
            Ayush Yadav is a multidisciplinary designer and creator with
            experience across industries like manufacturing, food products,
            education, shipping, entertainment, and health. He has promoted
            campaigns for Mx Player, Alt Balaji, Amazon Prime, and Ubon, and
            worked with various startups. His work has been featured on
            platforms like Social Samosa, Social Media Dissect, Eat My News,
            Bihari No. 1, and Men's XP. Services include graphic design, logo
            design, UX research, public speaking, and visual design. He has held
            roles such as User Experience Lead at Habuild, Design Mentor at
            ADPList.org, and Head of Design at Fides and Spes.
          </p>
        </div>
      </section>
      {/* seven */}
      <section className="w-full flex flex-col gap-4 py-24 px-4 lg:px-12 justify-center bg-sky-500 rounded-3xl">
        <div className="flex gap-4 flex-col w-full max-w-2xl">
          <div className="relative">
            <span className="h-[1px] w-32 bg-white absolute -top-2 -left-8" />
            <h2 className="text-white font-bold text-3xl">Ayush yadav</h2>
            <p className="py-1 text-red-900 font-semibold">
              ( UX Design & Growth Lead )
            </p>
          </div>
          <p className="text-neutral-300 leading-relaxed text-xs md:text-base">
            Ayush Yadav is a multidisciplinary designer and creator with
            experience across industries like manufacturing, food products,
            education, shipping, entertainment, and health. He has promoted
            campaigns for Mx Player, Alt Balaji, Amazon Prime, and Ubon, and
            worked with various startups. His work has been featured on
            platforms like Social Samosa, Social Media Dissect, Eat My News,
            Bihari No. 1, and Men's XP. Services include graphic design, logo
            design, UX research, public speaking, and visual design. He has held
            roles such as User Experience Lead at Habuild, Design Mentor at
            ADPList.org, and Head of Design at Fides and Spes.
          </p>
        </div>
      </section>
    </main>
  );
}
