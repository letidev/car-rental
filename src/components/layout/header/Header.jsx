import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { getIsAdmin, logout } from "../../../utils/http-utils/user-requests";
import CarIcon from "../../../assets/car.svg";
import { PATHS } from "../../../utils/constants";

const Header = () => {
  const navigate = useNavigate();
  const isAdmin = getIsAdmin();

  const navigation = isAdmin
    ? [
        { name: "Cars", href: PATHS.Cars },
        { name: "All rents", href: PATHS.RentsAdmin },
        { name: "All users", href: PATHS.Users },
      ]
    : [
        { name: "Cars", href: PATHS.Cars },
        { name: "My rents", href: PATHS.Rents },
        { name: "My Profile", href: PATHS.EditMe },
      ];

  return (
    <header className="mb-10 bg-teal-600">
      <nav
        className="px-4 mx-auto max-w-screen-2xl sm:px-6 lg:px-8"
        aria-label="Top"
      >
        <div className="flex items-center justify-between w-full py-6 border-b border-teal-500 lg:border-none">
          <div className="flex items-center">
            <Link to="/">
              <img src={CarIcon} alt="Logo" className="w-12 h-12" />
            </Link>
            <div className="hidden ml-10 space-x-8 lg:block">
              {navigation.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-base font-medium text-white hover:text-teal-50"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>
          <div className="ml-10 space-x-4">
            <button
              onClick={() => {
                logout();
                navigate("/login");
              }}
              className="inline-block px-4 py-2 text-base font-medium text-teal-600 bg-white border border-transparent rounded-md hover:bg-teal-50"
            >
              Sign out
            </button>
          </div>
        </div>
        <div className="flex flex-wrap justify-center py-4 space-x-6 lg:hidden">
          {navigation.map((link) => (
            <Link
              key={link.name}
              to={link.href}
              className="text-base font-medium text-white hover:text-teal-50"
            >
              {link.name}
            </Link>
          ))}
        </div>
      </nav>
    </header>
  );
};

export default Header;
