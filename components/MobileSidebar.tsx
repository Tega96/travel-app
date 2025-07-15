//ts-none
import { SidebarComponent } from '@syncfusion/ej2-react-navigations';
import { Link } from 'react-router'
import NavItems from './NavItems';

function MobileSidebar() {
    let sidebar: SidebarComponent

    function toggleClick() {
        sidebar.toggle();
    }

    return (
        <div className="mobile-sidebar wrapper">
            <header className="">
                <Link to="/dashboard">
                    <img src="/assets/icons/logo.svg" alt="logo" className="size-[30px]" />
                    <h2>Tourvisto</h2>
                </Link>
                <button onClick={toggleClick}>
                    <img src="/assets/icons/menu.svg" alt="menu" className="size-7" />
                </button>
            </header>

            <SidebarComponent 
                width={270}
                ref={(Sidebar) => sidebar = Sidebar}
                created={() => sidebar.hide()}
                closeOnDocumentClick={true}
                showBackdrop={true}
                type="over"
            >
                <NavItems />
            </SidebarComponent>
        </div>
    );
}
export default MobileSidebar;