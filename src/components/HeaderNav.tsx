import { FaHome } from "react-icons/fa";

function HeaderNav() {
  return (
    <section className="header-nav">
      <h3 className='header-nav__title'>Sewing</h3>
      <div className='header-nav__menu'>
        <div className="header-nav__menu-item">
          <FaHome />
        </div>
        <div className="header-nav__menu-item">
          <p>Output</p>
        </div>
      </div>
    </section>
  )
}

export default HeaderNav;