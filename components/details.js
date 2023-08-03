function Details({ title, children }) {
  return (
    <>
      <details className="px-2">
        <summary className="flex items-center gap-10 justify-between">
          <p className="text-lg py-2">{title}</p>
          <div className="text-4xl text-green-600">+</div>
        </summary>
        <div className="pb-4 pl-2 text-lg text-gray-800">{children}</div>
      </details>
      <hr className="border-gray-400" />
      <style jsx>
        {`
          summary {
            list-style-type: none; /* Firefox */
          }

          summary::-webkit-details-marker {
            display: none; /* Chrome */
          }
        `}
      </style>
    </>
  );
}

export default Details;
