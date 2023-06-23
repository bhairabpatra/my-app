const Nav = (props) => {
  return (
    <div className="">
      <nav className="navbar navbar-expand-sm bg-success navbar-dark">
        <div class="container">
          <a class="navbar-brand" href="#">
            {props.link}
          </a>
        </div>
      </nav>
    </div>
  );
};

export default Nav;
