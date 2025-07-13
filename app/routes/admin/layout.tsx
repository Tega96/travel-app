import { Outlet } from 'react-router';
function Layout() {
    return (
        <div className="admin-layout bg-red-200">
            Mobile 
            <aside className="bg-green-500 w-full max-w-[270px] hidden lg:block" >side bar</aside>
            <aside className="bg-yellow-300 children"> <Outlet /> </aside> 
        </div>
    )
}
export default Layout;