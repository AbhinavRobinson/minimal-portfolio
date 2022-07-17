import {
  faDribbble,
  faGithub,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Divider } from "./Divider";

export default function Contact() {
  return (
    <>
      <Divider title="Contact" />
      <p className="max-w-3xl w-full">
        You can reach out to me over mail:{" "}
        <a
          href="mailto:abhinavrobinson@gmail.com"
          className="font-bold dark:text-white cursor-pointer"
        >
          abhinavrobinson@gmail.com
        </a>
      </p>
      <ul className="hs pt-4 justify-start max-w-3xl w-full gap-4 text-gray-500 select-none text-xl">
        <li className="hover:text-sky-500 cursor-pointer">
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://linkedin.com/in/abhinavrobinson"
          >
            <FontAwesomeIcon icon={faLinkedin} />
          </a>
        </li>
        <li className="hover:text-violet-500 cursor-pointer">
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://github.com/abhinavrobinson/"
          >
            <FontAwesomeIcon icon={faGithub} />
          </a>
        </li>
        <li className="hover:text-rose-500 cursor-pointer">
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://dribbble.com/AbhinavR"
          >
            <FontAwesomeIcon icon={faDribbble} />
          </a>
        </li>
      </ul>
    </>
  );
}
