import HeaderNav from "./HeaderNav";
import Sidebar from "./Sidebar";

function Layout() {
   return (
      <section className="d-flex">
         <Sidebar/>
         <HeaderNav />
      </section>
   )
}

export default Layout;