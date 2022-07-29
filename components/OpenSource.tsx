import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faArrowCircleRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Divider } from "./Divider";

export default function OpenSource() {
  const projects = [{
    name: "Minimal Portfolio",
    description: "(This project) A minimal portfolio website built with NextJS, TailwindCSS and Typescript.",
    link: "https://github.com/abhinavrobinson/minimal-portfolio",
    deployment: "https://abhinav.one",
    stack: [
      "NextJS",
      "TailwindCSS",
      "Typescript",
    ]
  }, {
    name: "Open Auto",
    description: "Demo Full Stack website made with NextJS and Typescript.",
    link: "https://github.com/AbhinavRobinson/open-auto-demo-ui",
    deployment: "https://open-auto-demo-ui.vercel.app",
    stack: [
      "NextJS",
      "SASS",
      "Typescript",
      "MongoDB",
      "Formik",
      "Yup",
      "React Hot Toast"
    ]
  }, {
    name: "Next GraphQL Shop",
    description: "A ecommerce website built with NextJS, GraphQL, and Typescript.",
    link: "https://github.com/AbhinavRobinson/next-graphql-shop-app",
    stack: [
      "NextJS",
      "GraphQL",
      "Typescript",
      "FaunaDB",
      "Auth0",
      "Apollo",
      "Stripe"
    ]
  }]

  return (
    <div className="max-w-3xl w-full">
      <Divider title="Open Source" />
      <div className="flex flex-col gap-4">
        {projects.map(project => (
          <div className="flex flex-col gap-4 p-4 sm:p-8 border rounded-xl border-zinc-700 duration-200 hover:border-transparent hover:-translate-y-0.5 hover:-translate-x-px hover:neo" key={project.name}>
            <div className="flex flex-row gap-2 justify-between">
              <div className="flex flex-col gap-1">
                <h3 className="text-xl font-serif">{project.name}</h3>
                <p className="text-sm">{project.description}</p>
              </div>
              <div className="flex flex-col text-lg text-gray-500">
                <a href={project.link} className="hover:text-violet-500" rel="noopener noreferrer" target="_blank">
                  <FontAwesomeIcon icon={faGithub} />
                </a>
                {project.deployment &&
                  <a href={project.deployment} rel="noopener noreferrer" target="_blank">
                    <FontAwesomeIcon icon={faArrowCircleRight} className="hover:text-yellow-500" />
                  </a>
                }
              </div>
            </div>
            <ul className="flex flex-row flex-wrap items-start justify-start gap-2 select-none">
              {project.stack.map((v) => (
                <li
                  className="duration-100 px-2 py-1 border border-zinc-500 hover:dark:border-zinc-300 hover:border-zinc-900 text-zinc-500 hover:dark:text-zinc-900 hover:text-zinc-100 rounded text-sm cursor-pointer hover:bg-zinc-900 hover:dark:bg-zinc-300"
                  key={v}
                >
                  {v}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}