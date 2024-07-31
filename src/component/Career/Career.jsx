
import React from "react";
import lappyPicture from "../../assets/clipart-vector.webp";
import CompanyCards from "./CompanyCards";
 import lappy from "../../assets/career.jpg";
import Footer from "../Footer/Footer";





export default function Career() {
  return (
    <div >
      <section className="relative py-32">
     

        <div className=" w-full mx-auto px-4 max-w-7xl  relative z-10">
          <div className="mx-auto max-w-xl text-center">
            <h1 className="mb-6 text-center font-semibold text-4xl  text-white ">
              Join us. Change lives.
            </h1>
            <p className="text-lg leading-normal text-slate-400">
              Join uss and help transform your life with advanced AI. Work on impactful
              projects and innovate for a better future.
            </p>
          </div>
        </div>
      </section>
      <section className="relative pb-24">
        <div className="w-full mx-auto px-4 max-w-7xl ">
          <div className="grid gap-7 md:grid-cols-3">
            <div className="rounded-2xl border border-slate-700 bg-neutral p-12 text-center transition-shadow hover:shadow-xl ">
              <h3 className="mb-1 font-semibold text-lg text-white ">UI / UX Designer</h3>
              <span className="mb-4 block text-xs  text-slate-400">Experience – 3 to 5 years</span>
              <p className="mb-8 text-slate-400 ">
                {" "}
                We are looking for a full-time Software QA Analyst to be part of our team to ensure
                the top-notch quality, overall functionality and usability.
              </p>
              <a className="text-sm font-bold text-red-600" href="/contact">
                Apply Now
              </a>
            </div>
            <div className="rounded-2xl border border-slate-700 bg-neutral p-12 text-center transition-shadow hover:shadow-xl ">
              <h3 className="mb-1 font-semibold text-lg text-white ">Full Stack Engineer</h3>
              <span className="mb-4 block text-xs text-slate-400">Experience – 3 to 5 years</span>
              <p className="mb-8 text-slate-400 ">
                {" "}
                We are looking for a full-time Software QA Analyst to be part of our team to ensure
                the top-notch quality, overall functionality and usability.
              </p>
              <a className="text-sm font-bold text-red-600" href="/contact">
                Apply Now
              </a>
            </div>
            <div className="rounded-2xl border border-slate-700 bg-neutral p-12 text-center transition-shadow hover:shadow-xl ">
              <h3 className="mb-1 font-semibold text-lg text-white ">Content Writer</h3>
              <span className="mb-4 block text-xs text-slate-400">Experience – 1 to 2 years</span>
              <p className="mb-8 text-slate-400 ">
                {" "}
                We are looking for a full-time Software QA Analyst to be part of our team to ensure
                the top-notch quality, overall functionality and usability.
              </p>
              <a className="text-sm font-bold text-red-600" href="/contact">
                Apply Now
              </a>
            </div>
            <div className="rounded-2xl border border-slate-700 bg-neutral p-12 text-center transition-shadow hover:shadow-xl ">
              <h3 className="mb-1 font-semibold text-lg text-white ">React Developer</h3>
              <span className="mb-4 block text-xs text-slate-400">Experience – 3 to 5 years</span>
              <p className="mb-8 text-slate-400 ">
                {" "}
                We are looking for a full-time Software QA Analyst to be part of our team to ensure
                the top-notch quality, overall functionality and usability.
              </p>
              <a className="text-sm font-bold text-red-600" href="/contact">
                Apply Now
              </a>
            </div>
            <div className="rounded-2xl border border-slate-700 bg-neutral p-12 text-center transition-shadow hover:shadow-xl ">
              <h3 className="mb-1 font-semibold text-lg text-white ">Growth Hacker</h3>
              <span className="mb-4 block text-xs text-slate-400 ">Experience – 3 to 5 years</span>
              <p className="mb-8 text-slate-400 ">
                {" "}
                We are looking for a full-time Software QA Analyst to be part of our team to ensure
                the top-notch quality, overall functionality and usability.
              </p>
              <a className="text-sm font-bold text-red-600" href="/contact">
                Apply Now
              </a>
            </div>
            <div className="rounded-2xl border border-slate-700 bg-neutral p-12 text-center transition-shadow hover:shadow-xl">
              <h3 className="mb-1 font-semibold text-lg  text-white">Media Marketer</h3>
              <span className="mb-4 block text-xs text-slate-400 ">Experience – 3 to 5 years</span>
              <p className="mb-8 text-slate-400">
                {" "}
                We are looking for a full-time Software QA Analyst to be part of our team to ensure
                the top-notch quality, overall functionality and usability.
              </p>
              <a className="text-sm font-bold text-red-600" href="/contact">
                Apply Now
              </a>
            </div>
          </div>
         
        </div>
      </section>
      <section className="relative py-24 ">
        <picture className="pointer-events-none absolute inset-0 -z-10 ">
          <img
            alt="gradient"
            loading="lazy"
            width="1920"
            height="789"
            className="h-full w-full"
            style={{ color: "transparent" }}
          />
        </picture>
        <div className="w-full mx-auto px-4 max-w-7xl ">
          <div className="lg:flex lg:justify-between">
            <div className="lg:w-[55%]">
              <div className="relative">
                <svg
                  viewBox="0 0 200 200"
                  xmlns="http://www.w3.org/2000/svg"
                  className="mx-auto mt-8 w-[80%] rotate-[8deg]"
                >
                  <defs>
                    <clipPath id="clipping" clipPathUnits="userSpaceOnUse">
                      <path
                        d="M 0, 100 C 0, 17.000000000000004 17.000000000000004, 0 100, 0 S 200, 17.000000000000004 200, 100 183, 200 100, 200 0, 183 0, 100 "
                        fill="#9446ED"
                      ></path>
                    </clipPath>
                  </defs>
                  <g clipPath="url(#clipping)">
                    <image
                   href={lappy}
                      width="200"
                      height="200"
                      clipPath="url(#clipping)"
                    />
                  </g>
                </svg>
                <img
                  alt="image"
                  loading="lazy"
                  width="740"
                  height="602"
                  className="absolute top-0   animate-updown" id="animate-updown"
                  style={{ color: "transparent" }}
                  src={lappyPicture}
                />
              </div>
            </div>

            <div className="py-20 lg:w-[45%] lg:pl-16">
              <h2 className="mb-6 font-semibold text-2xl text-white ">
                Our Perks when you join the team.
              </h2>
              <p className="mb-8 text-slate-300 text-lg leading-normal ">
                Employees are our number-one priority, so we like to take care of them!
              </p>
              <p className="mb-10 text-slate-400 ">
                Every digital creation available through MakersPlace is an authentic and truly
                unique digital creation, signed and issued by the creator — made possible by
                blockchain technology. Even if the digital creation is copied, it won&apos;t be the
                authentic and originally signed version.
              </p>
              <div className="flex space-x-4 sm:space-x-12">
                <div className="w-1/2">
                  <div className="mb-5 flex items-center space-x-4">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      width="24"
                      height="24"
                      className="h-8 w-8 shrink-0 fill-red-500"
                    >
                      <path fill="none" d="M0 0h24v24H0z"></path>
                      <path d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm0-2a8 8 0 1 0 0-16 8 8 0 0 0 0 16zm-.997-4L6.76 11.757l1.414-1.414 2.829 2.829 5.656-5.657 1.415 1.414L11.003 16z"></path>
                    </svg>
                    <span className="block font-semibold text-base text-white ">
                      Paid family leave
                    </span>
                  </div>
                  <div className="mb-5 flex items-center space-x-4">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      width="24"
                      height="24"
                      className="h-8 w-8 shrink-0 fill-red-500"
                    >
                      <path fill="none" d="M0 0h24v24H0z"></path>
                      <path d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm0-2a8 8 0 1 0 0-16 8 8 0 0 0 0 16zm-.997-4L6.76 11.757l1.414-1.414 2.829 2.829 5.656-5.657 1.415 1.414L11.003 16z"></path>
                    </svg>
                    <span className="block font-semibold text-base text-white ">
                      Flexible hours
                    </span>
                  </div>
                  <div className="mb-5 flex items-center space-x-4">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      width="24"
                      height="24"
                      className="h-8 w-8 shrink-0 fill-red-500"
                    >
                      <path fill="none" d="M0 0h24v24H0z"></path>
                      <path d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm0-2a8 8 0 1 0 0-16 8 8 0 0 0 0 16zm-.997-4L6.76 11.757l1.414-1.414 2.829 2.829 5.656-5.657 1.415 1.414L11.003 16z"></path>
                    </svg>
                    <span className="block font-semibold text-base text-white ">
                      Unlimited Coffee
                    </span>
                  </div>
                </div>
                <div className="w-1/2">
                  <div className="mb-5 flex items-center space-x-4">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      width="24"
                      height="24"
                      className="h-8 w-8 shrink-0 fill-red-500"
                    >
                      <path fill="none" d="M0 0h24v24H0z"></path>
                      <path d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm0-2a8 8 0 1 0 0-16 8 8 0 0 0 0 16zm-.997-4L6.76 11.757l1.414-1.414 2.829 2.829 5.656-5.657 1.415 1.414L11.003 16z"></path>
                    </svg>
                    <span className="block font-semibold text-base text-white ">
                      Health insurance
                    </span>
                  </div>
                  <div className="mb-5 flex items-center space-x-4">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      width="24"
                      height="24"
                      className="h-8 w-8 shrink-0 fill-red-500"
                    >
                      <path fill="none" d="M0 0h24v24H0z"></path>
                      <path d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm0-2a8 8 0 1 0 0-16 8 8 0 0 0 0 16zm-.997-4L6.76 11.757l1.414-1.414 2.829 2.829 5.656-5.657 1.415 1.414L11.003 16z"></path>
                    </svg>
                    <span className="block font-semibold text-base text-white ">
                      Challenging Work
                    </span>
                  </div>

                  <div className="mb-5 flex items-center space-x-4">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      width="24"
                      height="24"
                      className="h-8 w-8 shrink-0 fill-red-500"
                    >
                      <path fill="none" d="M0 0h24v24H0z"></path>
                      <path d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm0-2a8 8 0 1 0 0-16 8 8 0 0 0 0 16zm-.997-4L6.76 11.757l1.414-1.414 2.829 2.829 5.656-5.657 1.415 1.414L11.003 16z"></path>
                    </svg>
                    <span className="block font-semibold text-base text-white ">Great Pay</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CompanyCards />
      <Footer/>
    </div>
  );
}