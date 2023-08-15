import { Icon } from "@iconify/react";

const Navbar = () => {
  return (
    <nav className="font-roboto container mx-auto grid grid-rows grid-flow-col items-center py-1">
      <div className="nav-brand font-medium">Travel App</div>
      <div className="nav-link">
        <ul className="flex gap-5 justify-end items-center">
          <li className="cursor-pointer hover:text-white hover:font-medium">Home</li>
          <li className="cursor-pointer hover:text-white hover:font-medium">Destinasi</li>
          <li>
            <button className="flex items-center hover:text-white hover:font-medium">
              <Icon className="text-4xl" icon="ei:user" />
            </button>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
