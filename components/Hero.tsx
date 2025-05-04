import Image from "next/legacy/image";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faDribbble,
  faGithub,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import { faArrowRightToFile } from "@fortawesome/free-solid-svg-icons";

const Hero = () => {
  return (
    <section className="relative">
      <header>
        <Image
          src="/me.jpeg"
          alt="Abhinav Robinson"
          width={150}
          height={150}
          objectFit="cover"
          className="rounded-lg"
          loading="lazy"
        />
        <div className="vs gap-1">
          <h1>Abhinav Robinson</h1>
          <p>Senior Software Developer, Open Source Developer</p>
          <a
            target="_blank"
            rel="https://abhinavrobinson.dev"
            href="https://hh092ag1w4.ufs.sh/f/mmNdfblclFSXexkwZ6UUuIgSiBZk7cvpa423wofbHTdxAytq"
            className="text-lg flex items-center gap-2 hover:text-rose-500"
          >
            Resume
            <FontAwesomeIcon icon={faArrowRightToFile} />
          </a>
        </div>
        <ul className="vs items-end flex-grow gap-1 text-gray-500 select-none">
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
      </header>
    </section>
  );
};

export default Hero;
