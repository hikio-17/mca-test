import { FaHome } from "react-icons/fa";

function HeaderNav() {
   return (
      <section className='nav-header bg-white w-100 d-flex flex-column justify-content-around text-secondary'>
        <h1 className='nav-header__text pt-3 ps-3'>Sewing</h1>

        <div className="nav-header__item">
          <span className='ps-4 pb-2 pe-4 text-center'>
            <FaHome />
          </span>
          <span className='ps-4 pb-2 pe-4'>Output</span>
        </div>
      </section>
   )
}

export default HeaderNav;