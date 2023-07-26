import Container from "./container";

export default function Description({ description }) {
  return (
    <Container>
      <div className="h-24 flex flex-col justify-between mt-12">
        <p className="max-w-2xl text-xl">{description}</p>
        <hr />
      </div>
    </Container>
  );
}
