import { Divider } from "./Divider";

const Projects = () => {
  const projects = [
    {
      title: "Scope",
      link: "https://scopeapp.io",
      css: "text-indigo-500 border-indigo-500 hover:bg-indigo-500",
    },
    {
      title: "encryptus",
      link: "https://encryptus.io",
      css: "text-yellow-500 border-yellow-500 hover:bg-yellow-500",
    },
    {
      title: "UNXD",
      link: "https://unxd.com",
      css: "text-slate-500 border-slate-500 hover:bg-slate-500",
    },
    {
      title: "mintable",
      link: "https://mintable.com",
      css: "text-red-500 border-red-500 hover:bg-red-500",
    },
    {
      title: "polygon",
      link: "https://polygon.technology",
      css: "text-violet-500 border-violet-500 hover:bg-violet-500",
    },
    {
      title: "vanilla",
      link: "https://vanilla.network",
      css: `text-amber-500 border-amber-500 hover:bg-amber-500`,
    },
    {
      title: "myosin",
      link: "https://myosin.xyz",
      css: "text-sky-500 border-sky-500 hover:bg-sky-500",
    },
    {
      title: "biconomy",
      link: "https://www.biconomy.com",
      css: "text-fuchsia-500 border-fuchsia-500 hover:bg-fuchsia-500",
    },
  ];

  return (
    <div className="max-w-3xl w-full">
      <Divider title="Projects" />
      <ul className="flex flex-row flex-wrap items-start justify-start gap-3 select-none">
        {projects.map((v) => (
          <li
            key={v.title}
            className={
              "duration-100 px-4 py-2 border rounded-lg text-lg font-bold cursor-pointer capitalize hover:text-white " +
              v.css
            }
          >
            <a href={v.link} target="_blank" rel="noopener noreferrer">
              {v.title}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Projects;
