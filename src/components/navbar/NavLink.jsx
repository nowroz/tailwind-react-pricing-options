const NavLink = ({ route: { path, name } }) => {
  return (
    <li>
      <a href={path}>{name}</a>
    </li>
  );
};

export default NavLink;
