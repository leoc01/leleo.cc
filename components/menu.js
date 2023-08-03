import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";
import linkedinIcon from "../public/linkedin.png";
import githubIcon from "../public/github.png";
import menuIcon from "../public/menu.png";
import closeIcon from "../public/close.png";
import Image from "next/image";
import Maildiv from "./maildiv";

export default function Menu({ path, activateLink }) {
  const actualLocal = useRouter();
  const href = path ? path : actualLocal.pathname;
  const menuItems = [{ title: "blog", path: "/blog" }];

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
          className={`relative h-9 grow grid justify-end grid-cols-[auto_auto] ${
            href !== "/" ? "grid-cols-[auto_auto] justify-between" : ""
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
              clicked
                ? "animate-[blurer_0.2s_ease-in-out]"
                : "animate-[desblurer_0.3s_ease-in-out] hidden opacity-0"
            }`}
            onClick={() => setClicked((current) => !current)}
          ></div>
          <div
            className={`fixed z-20 top-0 left-0 md:relative pt-7 md:pt-4 px-4 w-full -top-3 bg-white border-b md:border-b-0 md:bg-gray-100 ${
              clicked
                ? "animate-[abremenu_0.3s_ease-out]"
                : "animate-[fechamenu_0.2s_ease-in-out] hidden md:block"
            }`}
          >
            <div className="flex flex-col md:flex-row md:justify-end">
              <div className="grid grid-cols-[auto_auto] grow">
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
                  className="justify-self-end relative px-3 md:hidden"
                  onClick={() => setClicked((current) => !current)}
                >
                  <Image src={closeIcon} fill className="object-contain" />
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
              <p className="text-gray-800 text-lg mt-8 mr-3">
                Eu sou um Desenvolvedor Web muito curioso, sempre busco estar
                atualizado e, tenho muito interesse em fazer novas parcerias.
              </p>
              <p className="text-gray-800 text-lg mt-8">Me manda um email:</p>
              <Maildiv />
              <div className="p-6 md:hidden inline-grid grid-cols-2 gap-2">
                <Link
                  className="relative h-16"
                  href="https://github.com/leoc01"
                  target="_blank"
                >
                  <Image
                    src={githubIcon}
                    fill
                    className="p-2 rounded-2xl object-contain"
                  />
                </Link>
                <Link
                  className="relative h-16"
                  href="https://www.linkedin.com/in/leocampetti/"
                  target="_blank"
                >
                  <Image
                    src={linkedinIcon}
                    fill
                    className="p-2 rounded-2xl object-contain"
                  />
                </Link>
              </div>
            </div>
          </div>
          <button
            className="relative px-3 md:hidden col-start-2 col-span-1"
            onClick={() => setClicked((current) => !current)}
          >
            <Image src={menuIcon} fill className="object-contain" />
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
