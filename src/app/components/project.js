import Link from "next/link";
const Project = () => {
  const projectList = [
    {
      title: "Sales Monitoring",
      caption: "Full Stack / VanillaJS / Python",
      link: "https://fis-255485883422.us-central1.run.app",
    },
    {
      title: "Ecommerce",
      caption: "Full Stack / ReactJS / Python",
      link: "https://e-commerce-255485883422.us-central1.run.app",
    },
    {
      title: "E-learning",
      caption: "Full Stack / ReactJS / Python",
      link: "https://jocular-pixie-75b8d5.netlify.app/",
    },
    {
      title: "Github Issue Page Clone",
      caption: "Front-end / ReactJS",
      link: "https://funny-otter-ced3ad.netlify.app/",
    },
    {
      title: "Open Sea Bot Uploader",
      caption: "Desktop / Python",
      link: "https://flashdreiv.github.io/videos/opensea_bot.webm",
    },
    {
      title: "Payment Bridge",
      caption: "ReactJS ",
      link: "https://www.upwork.com/freelancers/~01168a65a459e31b45?p=1502513320760922112",
    },
    {
      title: "Attendance Monitoring",
      caption: "Full Stack / ReactJS / Express",
      link: "https://flashdreiv.github.io/videos/hris.mov",
    },
  ];

  return (
    <div className="pt-[4px] pb-[200px] fade-in">
      <ul className="flex flex-col gap-[20px] xs:gap-[10px]">
        {projectList.map((project, index) => (
          <li key={index} className="flex flex-col md:gap-[10px]">
            <Link
              target="_blank"
              rel="noopener noreferrer"
              href={project.link}
              className="pointer-events-auto lg:text-7xl tracking-tighter  md:font-thin xs:text-2xl md:text-4xl text-right rtl xs:font-extralight"
            >
              {index % 2 === 0
                ? project.title.toUpperCase()
                : project.title.toLowerCase()}
            </Link>
            <p className="lg:text-base xs:text-[0.7rem] font-bold self-end tracking-tighter text-right rtl">
              {project.caption}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Project;
