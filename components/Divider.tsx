import Link from "next/link";
import { FC } from "react";

export const Divider: FC<{ title: string }> = ({ title }) => {
  return (
    <div
      className="overflow-x-hidden w-full max-w-3xl pb-4 pt-8"
      id={`#${title.toLowerCase().split(" ").join("-")}`}
    >
      <div className="divider text-bold max-w-max mx-0 text-left relative mb-4 md:w-max">
        <Link href={`#${title.toLowerCase().split(" ").join("-")}`} legacyBehavior>
          {title}
        </Link>
      </div>
    </div>
  );
};
