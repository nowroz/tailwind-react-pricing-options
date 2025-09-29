import { Menu, X } from "lucide-react";
import NavLink from "./NavLink";
import { useState } from "react";

const navigationPaths = [
  {
    id: 1,
    name: "Home",
    path: "/",
  },
  {
    id: 2,
    name: "About",
    path: "/about",
  },
  {
    id: 3,
    name: "Services",
    path: "/services",
  },
  {
    id: 4,
    name: "Blog",
    path: "/blog",
  },
  {
    id: 5,
    name: "Contact",
    path: "/contact",
  },
  {
    id: 6,
    name: "Profile",
    path: "/profile",
  },
  {
    id: 7,
    name: "Settings",
    path: "/settings",
  },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const links = navigationPaths.map((route) => (
    <NavLink key={route.id} route={route}></NavLink>
  ));

  return (
    <nav className="flex justify-between mx-10">
      <div className="flex gap-4" onClick={() => setOpen(!open)}>
        {open ? (
          <X className="lg:hidden"></X>
        ) : (
          <Menu className="lg:hidden"></Menu>
        )}
        <ul
          className={`lg:hidden absolute ${open ? "top-8" : "-top-80"} duration-300 bg-white text-black`}
        >
          {links}
        </ul>
        <h3>Navbar</h3>
      </div>
      <ul className="hidden lg:flex gap-6">{links}</ul>
      <button>Sign In</button>
    </nav>
  );
};

export default Navbar;
