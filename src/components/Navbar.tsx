import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className=" sticky top-0 bg-white shadow-sm flex justify-between px-4">
      <ul className="flex flex-row gap-2 ">
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/store">Store</NavLink>
        </li>
        <li>
          <NavLink to="/about">About</NavLink>
        </li>
      </ul>

      <button className="w-12 h-12 relative ">
        <svg
          height="32px"
          id="Layer_1"
          version="1.1"
          viewBox="0 0 32 32"
          width="32px"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g transform="translate(0 288)">
            <path d="M30-287.999h-4c-0.967,0-1.795,0.691-1.967,1.643l-0.43,2.357H2c-0.693,0-1.337,0.359-1.701,0.949   c-0.364,0.59-0.397,1.324-0.088,1.945l6,12C6.55-268.427,7.242-268,8-268h12.694l-0.363,2H10c-1.104,0-2,0.896-2,2   c0,1.105,0.896,2,2,2h12c0.967,0,1.795-0.691,1.967-1.643l3.703-20.358H30c1.104,0,2-0.895,2-2c0-1.105-0.896-2-2-2V-287.999z    M9.237-271.999l-4-8h17.641l-1.455,8H9.237z" />
            <path d="M12-259.999c-1.104,0-2,0.896-2,2c0,1.105,0.896,2,2,2s2-0.895,2-2C14-259.104,13.104-259.999,12-259.999z" />
            <path d="M20-259.999c-1.104,0-2,0.896-2,2c0,1.105,0.896,2,2,2c1.105,0,2-0.895,2-2C22-259.104,21.105-259.999,20-259.999z" />
          </g>
        </svg>
        <div className="rounded-full bg-red-500 flex justify-center items-center text-white w-6 h-6 absolute bottom-0 right-0 translate-x-1/4">
          3
        </div>
      </button>
    </nav>
  );
};
export default Navbar;