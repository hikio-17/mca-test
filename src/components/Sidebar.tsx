import { FaBook, FaSearch } from "react-icons/fa";

function Sidebar () {
   return (
      <section className='sidebar bg-dark w-25'>
        <div className="profile d-flex align-items-center mt-2 ps-3">
          <div className="profile__image">
            <img className='' src="user.jpg" alt="user" />
          </div>
          <p className='profile__name text-white px-3 pt-3'>Your Name</p>
        </div>
        <hr className='bg-white' />

        <div className="input-group bg-dark-subtle p-3">
          <input type="text" className="form-control bg-dark text-white" placeholder="Search" aria-label="Recipient's username" aria-describedby="basic-addon2" />
          <span className="input-group-text bg-dark text-white" id="basic-addon2">
            <FaSearch />
          </span>
        </div>

        <div className='menu text-secondary ps-5'>
          <div className="menu-item">
            <FaBook />
            <span className='ms-3 pt-1'>Sewing</span>
          </div>
        </div>
      </section>
   )
}

export default Sidebar;