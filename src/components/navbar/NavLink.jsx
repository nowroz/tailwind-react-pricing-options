const NavLink = ({ route: { path, name } }) => {
  return (
    <li>
      <a className="block hover:bg-emerald-600 px-4" href={path}>
        {name}
      </a>
    </li>
  );
};

export default NavLink;
