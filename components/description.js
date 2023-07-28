import Container from "./container";
import Script from "next/script";

export default function Description({ description }) {
  return (
    <Container>
      <div className="flex flex-col justify-between mt-12">
        <p id="description" className="text-xl md:max-w-3xl">
          {description}
        </p>
        <hr />
      </div>
    </Container>
  );
}
