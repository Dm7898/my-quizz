const Loader = () => {
  return (
    <div className="flex flex-col items-center justify-center h-[50vh] text-center space-y-4">
      <div className="w-12 h-12 border-4 border-t-transparent border-blue-500 rounded-full animate-spin"></div>
      <h2 className="text-xl font-semibold text-white">Loading...</h2>
      <p className="text-gray-400">Please wait while we fetch your quiz.</p>
    </div>
  );
};

export default Loader;
