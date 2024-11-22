import { Link } from "react-router-dom";

const Header = () => {
  return (
    <>
      <div className="px-10 py-5 w-full flex items-center text-secondary text-xl gap-10">
        <div className="flex">
          <Link to="/home" className="flex items-center">
            <img
              src="/assets/icons/person-dark.png"
              className="my-2 scale-50 cursor-pointer h-10 w-10"
            />
            Home
          </Link>
        </div>
        <Link to="/cv">CV</Link>
        <Link to="/teaching">Teaching</Link>
        <Link to="/contact">Contact</Link>
      </div>
    </>
  );
};

export default Header;
