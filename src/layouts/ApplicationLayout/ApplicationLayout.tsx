import { ReactNode } from "react";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import { Outlet } from "react-router-dom";

export interface ApplicationLayoutProps {
  children: ReactNode | ReactNode[];
}

const ApplicationLayout = ({ children }: ApplicationLayoutProps) => {
  return (
    <div className="min-h-screen w-full flex flex-col">
      <Header />
      <main className="flex-1 w-full min-w-0 bg-gray-100">
        {children}
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default ApplicationLayout;
