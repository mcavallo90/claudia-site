import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="w-full bg-cr-purple h-1/10 flex flex-row items-center">
      <div>
        <Link to="/home" className="flex items-center">
          <img
            src="/assets/icons/person.png"
            className="my-2 scale-50 cursor-pointer"
          />
          Home
        </Link>
      </div>
      <div>
        <Link to="/cv" className="flex">
          CV
        </Link>
      </div>
      <div>
        <Link to="/contact" className="flex">
          Contact
        </Link>
      </div>
    </div>
  );
};

export default Header;
