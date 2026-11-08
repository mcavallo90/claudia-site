import { ReactNode } from "react";

const BasicCard = ({ children }: { children: ReactNode }) => {
  return (
    <div className="w-full max-w-4xl mx-auto px-5 sm:px-8 py-8 sm:py-14">
      {children}
    </div>
  );
};

export default BasicCard;
