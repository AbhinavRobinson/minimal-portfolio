import { Divider } from "./Divider";

const Stack = () => {
  const stack = [
    "Typescript",
    "Python",
    "GoLang",
    "Rust",
    "PostgreSQL",
    "MongoDB",
    "GraphQL",
    "Networking",
    "Devops",
    "AWS",
    "Web Security",
    "AI Integrations",
    "Blockchain",
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
