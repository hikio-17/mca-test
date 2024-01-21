import { FaHome } from "react-icons/fa";
import { Link } from "react-router-dom";

function HeaderNav() {
  return (
    <section className="header-nav">
      <h3 className='header-nav__title'>Sewing</h3>
      <div className='header-nav__menu'>
        <div className="header-nav__menu-item">
          <Link to='/'>
            <FaHome />
          </Link>
        </div>
        <div className="header-nav__menu-item">
          <Link to='/sewing'>
            <p>Output</p>
          </Link>
        </div>
      </div>
    </section>
  )
}

export default HeaderNav;