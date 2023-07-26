import Image from "next/image";
import post1img from "../public/post1-button.png";
import Container from "./container";
import Link from "next/link";
import Date from "./date";

export default function Card({ title, date, description, path }) {
  return (
    <Container>
      <Link href={`/blog/${path}`}>
        <div className="flex mb-6 bg-white h-48 mt-5 rounded-2xl max-w-3xl transition ease-out duration-300 drop-shadow-md border hover:drop-shadow-xl hover:-translate-y-1">
          <div className="relative h-full aspect-square">
            <Image src={post1img} fill className="rounded-2xl"></Image>
          </div>
          <div className="py-4 px-8">
            <h3 className="text-2xl">{title}</h3>
            <Date className="text-gray-400 text-s" dateString={date} />
            <p>{description}</p>
          </div>
        </div>
      </Link>
    </Container>
  );
}
