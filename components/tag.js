function Tag({ client, hoverColor }) {
  return (
    <>
      <button
        className={`${hoverColor} bg-gray-400 text-gray-800 hover:text-gray-100 mr-2 px-2 py-0.5 rounded`}
      >
        {client}
      </button>
    </>
  );
}

export default Tag;
