import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";
import linkedinIcon from "../public/linkedin.svg";
import githubIcon from "../public/github.svg";
import Image from "next/image";

export default function Menu({ path, activateLink }) {
  const actualLocal = useRouter();
  const href = path ? path : actualLocal.pathname;
  const menuItems = [
    { title: "projetos", path: "/projetos" },
    { title: "blog", path: "/blog" },
    { title: "currículo", path: "/curriculo" },
    { title: "contato", path: "/contato" },
  ];

  const isActive = (path) => {
    const baseClassName = "px-16 md:px-3 pt-2 md:pt-0";

    return href !== path || activateLink
      ? `${baseClassName} hover:underline`
      : `${baseClassName} text-gray-300 pointer-events-none`;
  };

  const getLogoState = () => {
    const [clicked, setClicked] = useState(false);

    return (
      <div className="flex items-end w-full md:max-w-5xl mx-auto">
        <Link
          href="/"
          className={`${
            (href !== "/" && "hover:underline text-gray-500 text-current") ||
            "text-gray-800 pointer-events-none"
          } text-3xl`}
        >
          <strong>leleo.cc</strong>
        </Link>
        <p
          className={`${
            (href !== "/" && "text-gray-500") || "text-gray-900"
          } text-3xl px-1`}
        >
          /
        </p>
        <div
          className={`relative h-9 grow grid ${
            href !== "/" ? "grid-cols-[auto_auto]" : ""
          }`}
        >
          {href !== "/" && (
            <Link
              href={href}
              className={`justify-self-start text-gray-900 text-3xl ${
                activateLink ? "hover:underline" : "pointer-events-none"
              }`}
            >
              <strong>
                {menuItems.find((item) => item.path === href).title}
              </strong>
            </Link>
          )}
          <div
            className={`fixed md:hidden z-10 top-0 left-0 w-screen h-screen backdrop-blur-sm bg-gray-500/30 ${
              clicked ? "block" : "hidden"
            }`}
            onClick={() => setClicked((current) => !current)}
          ></div>
          <div
            className={`fixed z-20 left-0 md:relative pt-10 md:pt-4 px-4 w-full -top-3 bg-white border-b md:border-b-0 md:bg-gray-100 ${
              clicked ? "block" : "hidden md:block"
            }`}
          >
            <div className="flex flex-col  md:flex-row md:justify-end">
              <div className="grid grid-cols-[auto_auto]">
                <Link
                  href="/"
                  className={`${
                    (href !== "/" &&
                      "hover:underline text-gray-500 text-current") ||
                    "text-gray-800 pointer-events-none"
                  } px-16 md:hidden`}
                >
                  leleo.cc
                </Link>
                <button
                  className="justify-self-end self-end px-4 md:hidden"
                  onClick={() => setClicked((current) => !current)}
                >
                  X
                </button>
              </div>
              {menuItems.map((menuItem) => {
                return (
                  <Link
                    className={isActive(menuItem.path)}
                    href={menuItem.path}
                    key={menuItem.path}
                  >
                    {menuItem.title}
                  </Link>
                );
              })}
              <div className="p-10 md:hidden grid grid-cols-2 gap-2">
                <Link
                  className="relative h-20 w-full"
                  href="https://github.com/leoc01"
                  target="_blank"
                >
                  <Image
                    src={githubIcon}
                    fill
                    className="aspect-square p-2 rounded-2xl object-contain"
                  />
                </Link>
                <Link
                  className="relative h-20 w-full"
                  href="https://www.linkedin.com/in/leocampetti/"
                  target="_blank"
                >
                  <Image
                    src={linkedinIcon}
                    fill
                    className="aspect-square p-2 rounded-2xl object-contain"
                  />
                </Link>
              </div>
            </div>
          </div>
          <button
            className="justify-self-end self-end px-3 md:hidden"
            onClick={() => setClicked((current) => !current)}
          >
            M
          </button>
        </div>
      </div>
    );
  };

  return (
    <nav className="pb-3 pt-6 w-full flex justify-between text-gray-500 text-2xl mx-auto items-start">
      {getLogoState()}
    </nav>
  );
}
