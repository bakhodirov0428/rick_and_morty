import { NavLink } from "react-router-dom";

export const Header = () => {
  return (
    <header className="bg-white/80 backdrop-blur sticky top-0 inset-x-0 py-4 z-50">
      <nav className="container flex items-center">
        <div className="w-1/2">
          <span className="font-black text-xl">Rick & Morty</span>
        </div>

        <div className="w-1/2">
          <ul className="list-none flex items-center justify-end gap-6">
            <li>
              <NavLink
                to="/"
                className={({ isActive }) => isActive ? "text-blue-600" : null}
              >
                Characters
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/locations"
                className={({ isActive }) => isActive ? "text-blue-600" : null}
              >
                Locations
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/episodes"
                className={({ isActive }) => isActive ? "text-blue-600" : null}
              >
                Episodes
              </NavLink>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};
