import React from "react";
import ceo1 from "../assets/Speakers/ceo1.webp";
import ceo2 from "../assets/Speakers/ceo2.webp";
import ceo3 from "../assets/Speakers/ceo3.webp";
import ceo4 from "../assets/Speakers/ceo4.webp";
import ceo5 from "../assets/Speakers/ceo5.webp";
import ceo6 from "../assets/Speakers/ceo6.webp";
import ceo7 from "../assets/Speakers/ceo7.webp";
import ceo8 from "../assets/Speakers/abhi_mishra.jpg";

export default function OurSpeaker() {
  return (
    <main className="h-full w-full py-20 px-4 lg:px-24 space-y-24">
      {/* second section */}
      <section className="relative w-full flex flex-col lg:flex-row gap-4 py-24 px-4 lg:px-12 justify-between bg-red-400 rounded-3xl">
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
              className="h-[50vh] w-[29vw] object-cover rounded-[6rem] border-4 border-white"
          />
        </div>
      </section>
      {/* third section */}
      <section className="relative w-full flex flex-col lg:flex-row gap-4 py-24 px-4 lg:px-12 justify-between bg-gray-400 rounded-3xl">
        <div className="flex gap-4 flex-col md:w-full lg:w-2/3">
          <div className="relative">
            <span className="h-[1px] w-32 bg-white absolute -top-2 -left-8" />
            <h2 className="text-white font-bold text-3xl">Rounak Anand</h2>
            <p className="py-1 text-red-900 font-semibold">
              (Unseen, MP, 104k+ Followers)
            </p>
          </div>
          <p className="text-neutral-300 leading-relaxed text-lg md:text-xl">
            Rounak Anand is a self-taught content creator and software engineer
            from Narsinghpur, Madhya Pradesh.
          </p>
          <ul className="list-disc text-lg md:text-xl">
            <li className="text-neutral-300 leading-relaxed">
              Founder of Unseen MP, a platform showcasing Madhya Pradesh's
              hidden cultural and historical treasures.
            </li>
            <li className="text-neutral-300 leading-relaxed">
              Holds a Computer Science degree and trained in content creation
              from Nas Academy.
            </li>
            <li className="text-neutral-300 leading-relaxed">
              Excels in content marketing, social media strategies, and has
              served clients like Prime Video and MX Player.
            </li>
            <li className="text-neutral-300 leading-relaxed">
              Enjoys writing poems, traveling, exploring culinary delights, and
              is passionate about storytelling and improving the world.
            </li>
          </ul>
        </div>
        <div className="lg:w-1/3 flex justify-center lg:justify-end">
          <img
            src={ceo2}
            alt="Raunak Anand"
              className="h-[50vh] w-[29vw] object-cover rounded-[6rem] border-4 border-white "
          />
        </div>
      </section>
      {/* fourth section */}
      <section className="relative w-full flex flex-col lg:flex-row gap-4 py-24 px-4 lg:px-12 justify-between bg-blue-400 rounded-3xl">
        <div className="flex gap-4 flex-col md:w-full lg:w-2/3">
          <div className="relative">
            <span className="h-[1px] w-32 bg-white absolute -top-2 -left-8" />
            <h2 className="text-white font-bold text-3xl">Sarthak Mittal</h2>
            <p className="py-1 text-red-900 font-semibold">
              (CEO Badbusiness.in)
            </p>
          </div>
          <ul className="list-disc text-lg md:text-xl">
            <li className="text-neutral-300 leading-relaxed">
              Chairman of Mittal Alliance and CEO of Badbusiness.in,
              specializing in corporate leadership and strategic growth.
            </li>
            <li className="text-neutral-300 leading-relaxed">
              Successfully led Mittal Alliance in launching multiple initiatives
              that support startups and tech professionals.
            </li>
            <li className="text-neutral-300 leading-relaxed">
              Author, YouTuber, blogger, and speaker sharing business and
              personal growth insights.
            </li>
            <li className="text-neutral-300 leading-relaxed">
              Co-founder of FFA Animal NGO, advocating for animal welfare.
            </li>
            <li className="text-neutral-300 leading-relaxed">
              Authored influential articles and books that provide valuable
              insights into business strategy and personal development.
            </li>
          </ul>
        </div>
        <div className="lg:w-1/3 flex justify-center lg:justify-end">
          <img
            src={ceo1}
            alt="Ayush Yadav"
              className="h-[50vh] w-[29vw] object-cover rounded-[6rem] border-4 border-white"
          />
        </div>
      </section>

      <section className="relative w-full flex flex-col lg:flex-row gap-4 py-24 px-4 lg:px-12 justify-between bg-red-400 rounded-3xl">
        <div className="flex gap-4 flex-col md:w-full lg:w-2/3">
          <div className="relative">
            <span className="h-[1px] w-32 bg-white absolute -top-2 -left-8" />
            <h2 className="text-white font-bold text-3xl">Pratham Sahu</h2>
            <p className="py-1 text-red-900 font-semibold">
              (Co-Founder & COO of Badbusiness.in)
            </p>
          </div>
          <ul className="list-disc text-lg md:text-xl">
            <li className="text-neutral-300 leading-relaxed">
              Co-Founder & COO at Badbusiness.in | CMO at Global Success Media |
              President of YLF Madhya Pradesh.
            </li>
            <li className="text-neutral-300 leading-relaxed">
              Co-founder & COO of BadBusiness.in, driving operational excellence
              and business growth.
            </li>
            <li className="text-neutral-300 leading-relaxed">
              Diploma Engineering student passionate about innovation and
              problem-solving.
            </li>
            <li className="text-neutral-300 leading-relaxed">
              Proficient in AutoCAD 2D/3D, Canva, and Microsoft Office.
            </li>
            <li className="text-neutral-300 leading-relaxed">
              Seeking opportunities in startups or research positions for
              hands-on experience and skill development.
            </li>
          </ul>
        </div>
        <div className="lg:w-1/3 flex justify-center lg:justify-end">
          <img
            src={ceo4}
            alt="Ayush Yadav"
              className="h-[50vh] w-[29vw] object-cover rounded-[6rem] border-4 border-white"
          />
        </div>
      </section>

      <section className="relative w-full flex flex-col lg:flex-row gap-4 py-24 px-4 lg:px-12 justify-between bg-pink-400 rounded-3xl">
        <div className="flex gap-4 flex-col md:w-full lg:w-2/3">
          <div className="relative">
            <span className="h-[1px] w-32 bg-white absolute -top-2 -left-8" />
            <h2 className="text-white font-bold text-3xl">Abhisek Mishra</h2>
            <p className="py-1 text-red-900 font-semibold">
              (CEO of Pisarv Technology)
            </p>
          </div>
          <ul className="list-disc text-lg md:text-xl">
            <li className="text-neutral-300 leading-relaxed">
              Renowned TEDx speaker
            </li>
            <li className="text-neutral-300 leading-relaxed">
              Known as "The Drone Man" for his innovations
            </li>
            <li className="text-neutral-300 leading-relaxed">
              Developer of an anti-drone system
            </li>
            <li className="text-neutral-300 leading-relaxed">
              Creator of a physical distancing system used at Indore Airport
              during the COVID-19 pandemic
            </li>
            <li className="text-neutral-300 leading-relaxed">
              Educational background: B.Tech from MNIT Jaipur and a Master's
              from BITS Pilani
            </li>

            <li className="text-neutral-300 leading-relaxed">
              Professional experience with renowned companies like Motorola,
              Exchanger, and Adobe
            </li>

            <li className="text-neutral-300 leading-relaxed">
              Introduced the AI drone "Nabhrakshak", designed to save lives from
              drowning
            </li>
            <li className="text-neutral-300 leading-relaxed">
              Recipient of the Young Innovator Award 2023
            </li>

            <li className="text-neutral-300 leading-relaxed">
              Continues to pioneer advancements in bioengineering and technology
            </li>
          </ul>
        </div>
        <div className="lg:w-1/3 flex justify-center lg:justify-end">
          <img
            src={ceo8}
            alt="Ayush Yadav"
               className="h-[50vh] w-[29vw] object-cover rounded-[6rem] border-4 border-white"
          />
        </div>
      </section>

      <section className="relative w-full flex flex-col lg:flex-row gap-4 py-24 px-4 lg:px-12 justify-between bg-gray-400 rounded-3xl">
        <div className="flex gap-4 flex-col md:w-full lg:w-2/3">
          <div className="relative">
            <span className="h-[1px] w-32 bg-white absolute -top-2 -left-8" />
            <h2 className="text-white font-bold text-3xl">Ayush Yadav</h2>
            <p className="py-1 text-red-900 font-semibold">
              (UX Designer & Growth Lead)
            </p>
          </div>
          <ul className="list-disc text-lg md:text-xl">
            <li className="text-neutral-300 leading-relaxed">
              Multidisciplinary designer with experience in manufacturing, food
              products, education, shipping, entertainment, and health
            </li>
            <li className="text-neutral-300 leading-relaxed">
              Promoted campaigns for Mx Player, Alt Balaji, Amazon Prime, and
              Ubon.
            </li>
            <li className="text-neutral-300 leading-relaxed">
              Work featured on Social Samosa, social media Dissect, Eat My News,
              Bihari No. 1, and Men's XP.
            </li>
            <li className="text-neutral-300 leading-relaxed">
              Offers services in graphic design, logo design, UX research,
              public speaking, and visual design.
            </li>
            <li className="text-neutral-300 leading-relaxed">
              Held roles such as User Experience Lead at Habuild and Design
              Mentor at ADPList.org.
            </li>
          </ul>
        </div>
        <div className="flex justify-center lg:justify-end">
  <img
    src={ceo7}
    alt="Ayush Yadav"
    className="h-[50vh] w-[29vw] max-w-full object-cover rounded-[6rem] border-4 border-white"
  />
</div>

      </section>
    </main>
  );
}
