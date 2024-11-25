import { ReactNode } from "react";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import { Outlet } from "react-router-dom";

export interface ApplicationLayoutProps {
  children: ReactNode | ReactNode[];
}

const ApplicationLayout = ({ children }: ApplicationLayoutProps) => {
  return (
    <div className="w-full h-screen flex flex-col">
      <Header />
        <div className="flex-1 w-full bg-gray-100">
          {children}
          <Outlet />
        </div>
      <Footer />
    </div>
  );
};

export default ApplicationLayout;
