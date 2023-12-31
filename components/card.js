import Image from "next/image";
import post1img from "../public/post1-button.png";
import Container from "./container";
import Link from "next/link";
import Date from "./date";

export default function Card({ title, date, description, path }) {
  return (
    <Container>
      <Link href={`/blog/${path}`} className="max-w-3xl">
        <div className="flex mb-6 bg-white mt-5 rounded-2xl md:max-w-2xl transition ease-out duration-300 drop-shadow-md border md:hover:drop-shadow-xl md:hover:-translate-y-1">
          <div className="px-6 py-4">
            <h3 className="text-2xl">{title}</h3>
            <Date className="text-gray-600 text-s" dateString={date} />
            <p className="text-lg mt-3">{description}</p>
          </div>
        </div>
      </Link>
    </Container>
  );
}
