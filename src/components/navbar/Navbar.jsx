import NavLink from "./NavLink";

const Navbar = () => {
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

  return (
    <nav>
      <ul className="flex gap-6">
        {navigationPaths.map((route) => (
          <NavLink key={route.id} route={route}></NavLink>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
