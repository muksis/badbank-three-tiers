function NavBar(){
  const [isNavCollapsed, setIsNavCollapsed] = React.useState(true);
  const handleNavCollapse = () => setIsNavCollapsed(!isNavCollapsed);  

  return(
    <>
    <nav className="navbar navbar-expand-lg sticky-top navbar-light bg-light">
      <a className="navbar-brand" href="/" data-toggle="tooltip" title="Home">BadBank</a>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded={!isNavCollapsed} aria-label="Toggle navigation" onClick={handleNavCollapse}>
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className={`${isNavCollapsed ? 'collapse' : ''} navbar-collapse`} id="navbarNav" onClick={handleNavCollapse}>
        <ul className="navbar-nav">
          <li className="nav-item">
            <NavLink className="nav-link" to="/create-account" data-toggle="tooltip" title="Create new account">Create Account</NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/deposit" data-toggle="tooltip" title="Deposit money">Deposit</NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/withdraw" data-toggle="tooltip" title="Withdraw money">Withdraw</NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/alldata" data-toggle="tooltip" title="Users data">AllData</NavLink>
          </li>          
        </ul>
      </div>
    </nav>
    </>
  );
}

