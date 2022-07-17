import { Divider } from "./Divider";

const Stack = () => {
  const stack = [
    "React",
    "NextJS",
    "Typescript",
    "Javascript",
    "Mongo",
    "Express",
    "NestJS",
    "GraphQl",
    "Solidity",
    "Hardhat",
    "HTML",
    "CSS",
    "TailwindCSS",
    "SASS/SCSS",
    "Rust",
    "Golang",
    "Python",
    "AWS",
    "GCP",
    "Azure",
    "Git",
  ];

  return (
    <div className="max-w-3xl w-full">
      <Divider title="My Stack" />
      <ul className="flex flex-row flex-wrap items-start justify-start gap-3 select-none">
        {stack.map((v) => (
          <li
            className="duration-100 px-3 py-1 border border-zinc-500 hover:dark:border-zinc-300 hover:border-zinc-900 text-zinc-500 hover:dark:text-zinc-900 hover:text-zinc-100 rounded-lg text-lg cursor-pointer hover:bg-zinc-900 hover:dark:bg-zinc-300"
            key={v}
          >
            {v}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Stack;
