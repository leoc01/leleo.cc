import Link from "next/link";
import { useRouter } from "next/router";

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
    const baseClassName = "px-5";

    return href !== path || activateLink
      ? `${baseClassName} hover:underline`
      : `${baseClassName} text-gray-300 pointer-events-none`;
  };

  const getLogoState = () => {
    return (
      <div className="flex items-end">
        <Link
          href="/"
          className={`${
            (href !== "/" && "hover:underline text-gray-500 text-current") ||
            "text-gray-800 pointer-events-none"
          } text-4xl`}
        >
          leleo.cc
        </Link>
        <p
          className={`${
            (href !== "/" && "text-gray-500") || "text-gray-900"
          } text-4xl px-3`}
        >
          /
        </p>
        {href !== "/" && (
          <Link
            href={href}
            className={`text-gray-900 text-4xl ${
              activateLink ? "hover:underline" : "pointer-events-none"
            }`}
          >
            {menuItems.find((item) => item.path === href).title}
          </Link>
        )}
      </div>
    );
  };

  const getMenuState = () => {
    return (
      <div>
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
      </div>
    );
  };

  return (
    <nav className="py-3 flex justify-between text-gray-500 text-2xl max-w-5xl mx-auto h-28 items-end">
      {getLogoState()}
      {getMenuState()}
    </nav>
  );
}
