import React from "react";
import ceo1 from "../assets/Speakers/ceo1.webp";
import ceo2 from "../assets/Speakers/ceo2.webp";
import ceo3 from "../assets/Speakers/ceo3.webp";
import ceo4 from "../assets/Speakers/ceo4.webp";
import ceo5 from "../assets/Speakers/ceo5.webp";
import ceo6 from "../assets/Speakers/ceo6.webp";
import ceo7 from "../assets/Speakers/ceo7.png";

export default function OurSpeaker() {
  return (
    <main className="h-full w-full py-20 px-4 lg:px-24 space-y-24">
      {/* second section */}
      <section className="relative w-full flex flex-col lg:flex-row gap-4 py-24 px-4 lg:px-12 justify-between bg-blue-500 rounded-3xl">
        <div className="flex gap-4 flex-col md:w-full lg:w-2/3">
          <div className="relative">
            <span className="h-[1px] w-32 bg-white absolute -top-2 -left-8" />
            <h2 className="text-white font-bold text-3xl">Dhirendra Singh</h2>
            <p className="py-1 text-red-900 font-semibold">
              (Director, Virina Foundations)
            </p>
          </div>
          <p className="text-neutral-300 leading-relaxed text-lg md:text-xl">
            Dhirendra Singh is currently associated with 2 Companies and is
            director with Virina Welfare Foundation. As a Managing Director with
            Pragati Mantra Private Limited.
          </p>
          <p className="text-neutral-300 leading-relaxed text-lg md:text-xl">
            Virina Welfare Foundation (VWF) is a Private Not For Profit Company
            incorporated in India on 16 September 2021.
          </p>
          <h4 className="text-white font-semibold text-base">
            Some of their work for women empowerment:
          </h4>
          <ul className="list-disc text-lg md:text-xl">
            <li className="text-neutral-300 leading-relaxed">
              300,000 Sanitary pads distributed to improve health outcomes and
              reduce absenteeism.
            </li>
            <li className="text-neutral-300 leading-relaxed">
              700+ TB patients supported with essential resources.
            </li>
            <li className="text-neutral-300 leading-relaxed">
              10,000+ Girls empowered to return to education with confidence.
            </li>
            <li className="text-neutral-300 leading-relaxed">
              900+ Women trained in producing high-quality sports goods, with
              exports reaching international markets.
            </li>
          </ul>
        </div>
        <div className="lg:w-1/3 flex justify-center lg:justify-end">
          <img
            src={ceo6}
            alt="Dhirendra Singh"
            className="h-full max-h-96 w-auto rounded-[6rem] border-4 border-white"
          />
        </div>
      </section>
      {/* third section */}
      <section className="relative w-full flex flex-col lg:flex-row gap-4 py-24 px-4 lg:px-12 justify-between bg-red-500 rounded-3xl">
        <div className="flex gap-4 flex-col md:w-full lg:w-2/3">
          <div className="relative">
            <span className="h-[1px] w-32 bg-white absolute -top-2 -left-8" />
            <h2 className="text-white font-bold text-3xl">Raunak Anand</h2>
            <p className="py-1 text-red-900 font-semibold">
              (Unseen, MP, 104k+ Followers)
            </p>
          </div>
          <p className="text-neutral-300 leading-relaxed text-lg md:text-xl">
            Raunak Anand is a self-taught content creator, video producer, and
            content marketer with 6+ years of experience who wants to make this
            world 1% better using the art of storytelling. He has worked with
            big shot brands like Netflix, Prime Video, MX Player, Meesho and
            successful creators like Tech Burner and Think School.
          </p>
          <p className="text-neutral-300 leading-relaxed text-lg md:text-xl">
            Experienced in content production and social media tactics, he
            started India's first state-oriented infotainment channel - Unseen
            MP. With just 80 videos, he has already crossed 115K+ followers and
            garnered over 50M+ views.
          </p>
        </div>
        <div className="lg:w-1/3 flex justify-center lg:justify-end">
          <img
            src={ceo2}
            alt="Raunak Anand"
            className="h-full max-h-96 w-auto rounded-[6rem] border-4 border-white"
          />
        </div>
      </section>
      {/* fourth section */}
      <section className="relative w-full flex flex-col lg:flex-row gap-4 py-24 px-4 lg:px-12 justify-between bg-purple-500 rounded-3xl">
        <div className="flex gap-4 flex-col md:w-full lg:w-2/3">
          <div className="relative">
            <span className="h-[1px] w-32 bg-white absolute -top-2 -left-8" />
            <h2 className="text-white font-bold text-3xl">Sarthak Mittal</h2>
            <p className="py-1 text-red-900 font-semibold">
              (UX Design & Growth Lead)
            </p>
          </div>
          <p className="text-neutral-300 leading-relaxed text-lg md:text-xl">
            • Chairman of Mittal Alliance and CEO of Badbusiness.in,
            specializing in corporate leadership and strategic growth.
            <br /> <br /> • Successfully led Mittal Alliance in launching
            multiple initiatives that support startups and tech professionals.
            <br /> <br /> • Author, YouTuber, blogger, and speaker sharing
            business and personal growth insights.
            <br /> <br />• Co-founder of FFA Animal NGO, advocating for animal
            welfare. <br /> <br />• Authored influential articles and books that
            provide valuable insights into business strategy and personal
            development
          </p>
        </div>
        <div className="lg:w-1/3 flex justify-center lg:justify-end">
          <img
            src={ceo1}
            alt="Ayush Yadav"
            className="h-full max-h-96 w-auto rounded-[6rem] border-4 border-white"
          />
        </div>
      </section>
      {/* fifth section */}
      <section className="relative w-full flex flex-col lg:flex-row gap-4 py-24 px-4 lg:px-12 justify-between bg-emerald-500 rounded-3xl">
        <div className="flex gap-4 flex-col md:w-full lg:w-2/3">
          <div className="relative">
            <span className="h-[1px] w-32 bg-white absolute -top-2 -left-8" />
            <h2 className="text-white font-bold text-3xl">Sidhant Sharma</h2>
            <p className="py-1 text-red-900 font-semibold">
              (UX Design & Growth Lead)
            </p>
          </div>
          <p className="text-neutral-300 leading-relaxed text-lg md:text-xl">
            First company - Jakpinch.com May 2013 - Dec 2013 As the visionary
            founder of Jakpinch.com, I pioneered an innovative social networking
            platform aimed at eradicating the barriers between two distinct
            communities. <br />
            <b>Currently working on</b> - Founder wise international global
            started Feb 2023 <br />
            <b>Furry friends alliance</b> - Furry Friends Alliance is an
            initiative started by dedicated volunteers to support animals in
            need who cannot receive help otherwise. Our mission is to provide
            care and assistance to these vulnerable animals. Wise international
            global WIG is a company that provides outsourcing services across
            various domains to businesses globally. It offers a wide range of
            outsourcing solutions, including IT services, business process
            outsourcing (BPO), finance and accounting services, healthcare
            services, research and analysis, engineering services, and creative
            services.
          </p>
        </div>
        <div className="lg:w-1/3 flex justify-center lg:justify-end">
          <img
            src={ceo3}
            alt="Ayush Yadav"
            className="h-full max-h-96 w-auto rounded-[6rem] border-4 border-white"
          />
        </div>
      </section>

      <section className="relative w-full flex flex-col lg:flex-row gap-4 py-24 px-4 lg:px-12 justify-between bg-pink-500 rounded-3xl">
        <div className="flex gap-4 flex-col md:w-full lg:w-2/3">
          <div className="relative">
            <span className="h-[1px] w-32 bg-white absolute -top-2 -left-8" />
            <h2 className="text-white font-bold text-3xl">Pratham Sahu </h2>
            <p className="py-1 text-red-900 font-semibold">
              (UX Design & Growth Lead)
            </p>
          </div>
          <p className="text-neutral-300 leading-relaxed text-lg md:text-xl">
            Co-Founder & COO at Badbusiness.in | CMO at Global Success Media |
            President of YLF Madhya Pradesh <br /> <br /> • Co-founder & COO of
            BadBusiness.in, driving operational excellence and business growth.{" "}
            <br /> <br />
            • Diploma Engineering student passionate about innovation and
            problem-solving. <br /> <br />
            • Proficient in AutoCAD 2D/3D, Canva, and Microsoft Office. <br />{" "}
            <br />• Seeking opportunities in startups or research positions for
            hands-on experience and skill development.
          </p>
        </div>
        <div className="lg:w-1/3 flex justify-center lg:justify-end">
          <img
            src={ceo4}
            alt="Ayush Yadav"
            className="h-full max-h-96 w-auto rounded-[3rem]  border-4 border-white"
          />
        </div>
      </section>

      <section className="relative w-full flex flex-col lg:flex-row gap-4 py-24 px-4 lg:px-12 justify-between bg-blue-500 rounded-3xl">
        <div className="flex gap-4 flex-col md:w-full lg:w-2/3">
          <div className="relative">
            <span className="h-[1px] w-32 bg-white absolute -top-2 -left-8" />
            <h2 className="text-white font-bold text-3xl">Ayush Yadav </h2>
            <p className="py-1 text-red-900 font-semibold">
              (UX Design & Growth Lead)
            </p>
          </div>
          <p className="text-neutral-300 leading-relaxed text-lg md:text-xl ">
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
        <div className="lg:w-1/3 flex justify-center lg:justify-end">
          <img
            src={ceo7}
            alt="Ayush Yadav"
            className="h-full max-h-[500px] w-auto rounded-[3rem] border-4 border-white"
          />
        </div>
      </section>
    </main>
  );
}
