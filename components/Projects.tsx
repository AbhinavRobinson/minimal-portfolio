import { Divider } from "./Divider";

const Projects = () => {
  const projects = [
    {
      title: "Scope",
      link: "https://scopeapp.io",
      css: "text-indigo-500 border-indigo-500 hover:bg-indigo-500",
    },
    {
      title: "Nonceblox",
      link: "https://nonceblox.com",
      css: "text-orange-500 border-orange-500 hover:bg-orange-500",
    },
    {
      title: "Atom",
      link: "https://theatom.app",
      css: "text-fuchsia-500 border-fuchsia-500 hover:bg-fuchsia-500",
    },
  ];

  return (
    <div className="max-w-3xl w-full">
      <Divider title="Work Experience" />
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
