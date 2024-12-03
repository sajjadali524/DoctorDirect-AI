import { NavLink } from "react-router-dom";

const Sidebar = () => {
    const navLinks = [
        {
            title: "Dashboard",
            path: "/admin-dashboard"
        },
        {
            title: "Users",
            path: "/all-users"
        },
        {
            title: "Accepted Doctors",
            path: "/accepted-doctors"
        },
        {
            title: "Pending Doctors",
            path: "/pending-doctors"
        },
        {
            title: "Rejected Doctors",
            path: "/rejected-doctors"
        },
    ]
  return (
    <div className="bg-whiteSmoke border border-r-2 h-screen text-center py-10">
        <h1 className="text-[18px] font-[600]">Admin Panel</h1>

        <div className="flex flex-col text-left px-10 py-10 gap-5">
            {navLinks.map((items, index) => {
                return(
                    <NavLink to={items.path} key={index} className="text-[16px] font-[500]" activeclassname="active">{items.title}</NavLink>
                )
            })}
        </div>
    </div>
  )
}

export default Sidebar;
