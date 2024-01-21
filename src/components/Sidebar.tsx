import { FaBook, FaSearch } from "react-icons/fa";

function Sidebar() {
  return (
    <section className="sidebar">
      <div className="sidebar__profile">
        <div className="sidebar__profile-avatar">
          <img src="user.jpg" alt="avatar" />
        </div>
        <p className="sidebar__profile-name">
          Your Name
        </p>
      </div>

      <hr />

      <div className="input-group">
        <input type="text" placeholder="Search" />
        <div className="input-group-append">
          <button className="" type="button"><FaSearch /></button>
        </div>
      </div>

      <div className="sidebar__menu">
        <div className="sidebar__menu-item">
          <span className='sidebar__menu-item-icon'><FaBook /></span>
          <p className='sidebar__menu-item-text'>Sewing</p>
        </div>
      </div>
    </section>
  )
}

export default Sidebar;