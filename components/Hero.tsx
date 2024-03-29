import Image from "next/legacy/image";
import { useEffect, useState } from "react";

import { useTheme } from "next-themes";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faDribbble,
  faGithub,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import {
  faArrowRightToFile,
  faMoon,
  faSun,
} from "@fortawesome/free-solid-svg-icons";

const Hero = () => {
  const [, setMounted] = useState(false);
  const { systemTheme, theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  const currentTheme = theme === "system" ? systemTheme : theme;

  return (
    <section className="relative">
      <div
        className="absolute -top-8 right-0"
        onClick={() => setTheme(currentTheme != "light" ? "light" : "dark")}
      >
        <FontAwesomeIcon icon={currentTheme == "light" ? faSun : faMoon} />{" "}
      </div>
      <header>
        <Image
          src="/me.jpeg"
          alt="Abhinav Robinson's Picture"
          width={100}
          height={100}
          objectFit="cover"
          className="rounded-full"
          loading="lazy"
        />
        <div className="vs gap-1">
          <h1>Abhinav Robinson</h1>
          <p>
            Senior Software Developer, Open Source Contributer and Technical
            Lead
          </p>
          <a
            target="_blank"
            rel="https://abhinavrobinson.dev"
            href="https://utfs.io/f/169bccc8-6662-4ce1-adb3-5990d63d2c3b-yy92h0.pdf"
            className="text-lg flex items-center gap-2 hover:text-rose-500"
          >
            Résumé
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
