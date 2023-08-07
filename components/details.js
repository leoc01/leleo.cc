import { useState } from "react";

function Details({ title, children }) {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = (e) => {
    setIsOpen(e.target.open);
  };

  return (
    <>
      <details
        className="px-2 max-w-3xl cursor-pointer"
        open={isOpen}
        onToggle={handleToggle}
      >
        <summary className="flex items-center gap-10 justify-between">
          <p className="text-lg py-2">{title}</p>
          <div
            className={`transform transition-transform duration-200 text-4xl text-green-600 ${
              isOpen ? "rotate-45 text-red-600" : ""
            }`}
          >
            +
          </div>
        </summary>
        <div
          onClick={handleToggle}
          className="pb-4 pl-2 border-gray-300 border-l-2 text-lg text-gray-800 max-w-2xl cursor-default"
        >
          {children}
        </div>
      </details>
      <hr className="border-gray-300 max-w-3xl" />
      <style jsx>
        {`
          summary {
            list-style-type: none; /* Firefox */
          }

          summary::-webkit-details-marker {
            display: none; /* Chrome */
          }

          .rotate-45 {
            transform: rotate(45deg);
          }
        `}
      </style>
    </>
  );
}

export default Details;
