import React from "react";

const About = () => {
  const links = [
    {
      title: "Gmail",
      href: "mailto:dreivan.orprecio@gmail.com",
    },
    {
      title: "Upwork",
      href: "https://www.upwork.com/freelancers/~01168a65a459e31b45?viewMode=1",
    },
    {
      title: "Resume",
      href: "https://www.upwork.com/freelancers/~01f4e4c3d3c1c8e3a3",
    },
  ];
  return (
    <div className="fade-in absolute left-10 xs:bottom-[10%] md:bottom-[10%] lg:bottom-[30%] flex flex-col gap-10">
      <section className="flex flex-col gap-[4px]">
        {links.map((link, index) => (
          <a
            key={index}
            className="font-bold md:text-sm xs:text-base hover:opacity-50"
            href={link.href}
          >
            {link.title} →
          </a>
        ))}
      </section>
      <section className="flex flex-col gap-[20px]">
        <div>
          <p className="font-light text-base md:text-sm italic">Publications</p>
          <a
            href="http://ijasc.ascons.org/digital-library/2020/2/2/25"
            target="_blank"
            rel="noopener noreferrer"
            className="font-bold text-base md:text-sm hover:opacity-50"
          >
            3D Interactive Directory
          </a>
        </div>
        <div>
          <p className="font-light text-base italic">Vulnerability Research</p>
          <a
            href="https://www.exploit-db.com/exploits/41949"
            target="_blank"
            rel="noopener noreferrer"
            className="font-bold text-base md:text-sm hover:opacity-50"
          >
            IrfanView Buffer Overflow
          </a>
        </div>
      </section>
    </div>
  );
};

export default About;
