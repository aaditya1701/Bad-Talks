

const partners = [
  {
    url: "/img/partners/partner_logo_1.png",
    desc: "Justice AI",
    className: "object-contain aspect-video scale-125 md:scale-150",
    width: 180,
    height: 100,
  },
  {
    url: "/img/partners/partner_logo_2.png",
    desc: "Affilienet",
    className: "object-contain aspect-video scale-75 md:scale-100",
    width: 150,
    height: 100,
  },
  {
    url: "/img/partners/partner_logo_3.png",
    desc: "Manav Rachna",
    className: "object-contain aspect-video scale-75 md:scale-100",
    width: 150,
    height: 100,
  },
  {
    url: "/img/partners/partner_logo_4.png",
    desc: "GoSarte",
    className: "object-contain aspect-video scale-75 md:scale-100",
    width: 150,
    height: 100,
  },
  {
    url: "/img/partners/partner_logo_5.png",
    desc: "Grow Age: Digital Marketing Agency",
    className: "object-contain aspect-video scale-75 md:scale-100",
    width: 150,
    height: 100,
  },
];

export default function CompanyCards() {
  return (
    <section className="max-w-screen-xl mx-auto bg-black">
      <div className="grid grid-cols-2 md:grid-cols-5 place-items-center py-4 ">
        {partners &&
          partners.map((partner, index) => {
            return (
              <div key={index} className="p-2">
                <img
                  src={partner.url}
                  alt={partner.desc}
                  title={partner.desc}
                  width={partner.width}
                  height={partner.height}
                  className={partner.className}
                />
              </div>
            );
          })}

        {/* <div className="">
          <img
            src="/img/partners/partner_logo_1.png"
            alt="OK Blockchain Capital"
            title="OK Blockchain Capital"
            width={173}
            height={103}
            className="object-contain aspect-video scale-150"
          />
        </div>
        <div className="">
          <img
            src="/img/partners/partner_logo_2.png"
            alt="Coinbase"
            title="Coinbase"
            width={173}
            height={103}
            className="object-contain aspect-video"
          />
        </div>
        <div className="">
          <img
            src="/img/partners/partner_logo_3.png"
            alt="Dapper"
            title="Dapper"
            width={173}
            height={103}
            className="object-contain aspect-video"
          />
        </div>
        <div className="">
          <img
            src="/img/partners/partner_logo_4.png"
            alt="Trust Wallet"
            title="Trust Wallet"
            width={173}
            height={103}
            className="object-contain aspect-video"
          />
        </div>
        <div className="">
          <img
            src="/img/partners/partner_logo_5.png"
            alt="Y Combinator"
            title="Y Combinator"
            width={173}
            height={103}
            className="object-contain aspect-video"
          />
        </div> */}
      </div>
    </section>
  );
}