const Error = () => {
  return (
    <div className="flex flex-col items-center justify-center h-[50vh] text-center space-y-4">
      <span className="text-red-500 text-4xl">⚠️</span>
      <h2 className="text-2xl font-semibold text-white">
        Oops! Something went wrong.
      </h2>
      <p className="text-gray-400">
        We couldn&apos;t load the quiz. Please try again later.
      </p>
    </div>
  );
};

export default Error;
