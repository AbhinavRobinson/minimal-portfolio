import { FC } from "react";

export const Divider: FC<{ title: string }> = ({ title }) => {
  return (
    <div className="overflow-x-hidden w-full max-w-3xl pt-16 pb-4">
      <div className="divider text-bold max-w-max mx-0 text-left relative mb-4 md:w-max">
        {title}
      </div>
    </div>
  );
};
