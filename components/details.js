function Details({ title, children }) {
  return (
    <>
      <details className="px-2 max-w-3xl cursor-pointer">
        <summary className="flex items-center gap-10 justify-between">
          <p className="text-lg py-2">{title}</p>
          <div className="text-4xl text-green-600">+</div>
        </summary>
        <div className="pb-4 pl-2 text-lg text-gray-800 max-w-2xl cursor-default">
          {children}
        </div>
      </details>
      <hr className="border-gray-400 max-w-3xl" />
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
