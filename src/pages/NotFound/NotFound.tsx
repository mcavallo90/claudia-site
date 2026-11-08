const NotFound = () => {
  return (
    <div className="w-full flex flex-col items-center text-center px-5 py-16 sm:py-24">
      <h1 className="text-3xl sm:text-5xl text-secondary font-semibold">Not Found</h1>
      <p className="mt-8 text-primary text-base sm:text-xl">
        The page you are looking for does not exist.
      </p>
    </div>
  );
};

export default NotFound;
