import Link from "next/link";

function Button({ text, href }) {
  return (
    <>
      <Link
        href={href}
        scroll={false}
        className="text-xl my-12 px-6 py-3 text-gray-100 bg-gray-900 inline-block text-left object-left"
      >
        {text}
      </Link>
    </>
  );
}

export default Button;
