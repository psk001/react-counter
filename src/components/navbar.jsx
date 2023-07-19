const NavBar = ({totalCounters}) => {
  return (
    <nav className="navbar navbar-light bg-light">
      <a href="#" className="navbar-brand">
        NavBar
        <span className="badge badge-pill badge-secondry">
          {totalCounters}
        </span>
      </a>
    </nav>
  );
};

export default NavBar;
