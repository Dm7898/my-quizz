const Main = ({ children }) => {
  return (
    <main className=" text-white flex flex-col items-center justify-center min-h-screen w-full p-6 rounded-xl">
      {children}
    </main>
  );
};

export default Main;
