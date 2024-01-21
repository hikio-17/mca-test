import HeaderNav from "./HeaderNav";
import Sidebar from "./Sidebar";

function Layout() {
   return (
      <section className="d-flex position-relative">
         <Sidebar/>
         <HeaderNav />
      </section>
   )
}

export default Layout;