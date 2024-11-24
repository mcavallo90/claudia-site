const BasicCard = ({ children }: any) => {
  return (
    <div className="w-full h-full flex flex-col items-center px-4 sm:px-8 md:px-16 lg:px-48 py-10 sm:py-16 lg:py-20">
      {children}
    </div>
  );
};

export default BasicCard;
