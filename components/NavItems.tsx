import {Link, NavLink} from 'react-router';
import { sidebarItems } from "../app/constants"
import {cn} from '~/lib/utils'

function NavItems({handleClick}: {handleClick: () => void}) {
    const user = {
        name: "Otega Otite",
        email: "otiteotega@gmail.com",
        imgUrl: '/assets/images/david.webp'
    }


    return (
        <section className="nav-items">
            <Link to='/' className="link-logo">
                <img 
                    src="/assets/icons/logo.svg" 
                    alt="logo"
                    className="size-[30px]"
                />
                <h1> Tourvisto</h1>
            </Link>

            <div className="container">
                <nav>
                    {sidebarItems.map(({id, icon, label, href, }) => (
                        //NavLink allows you to open a dynamic block of code, and run a callback function within it.  
                        <NavLink to={href} key={id} > 
                            {({isActive}: {isActive: boolean}) => (
                                <div className={cn('group nav-item', {
                                    'bg-primary-100 !text-white': isActive
                                })} onClick={handleClick}>
                                    <img
                                        src={icon}
                                        alt={label}
                                        className={`group-hover:brightness-0 size-0 
                                            group-hover:invert 
                                            ${isActive ? 'brightness-0-invert' : 'text-dark-200'}
                                        `}
                                    />
                                    {label}
                                </div>
                            )}
                        </NavLink>
                    ))}
                </nav>

                <footer className="nav-footer">
                    <img 
                        src={user?.imgUrl || '/assets/images/david.webp'} 
                        alt={user?.name || 'Otega Otite'} 
                    />

                    <article>
                        <h2>{user?.name || 'Otega Otite'}</h2>
                        <p>{user?.email || 'otiteotega@gmail.com'}</p>
                    </article>

                    <button 
                        onClick={() => {
                            console.log('logout')
                        }}
                        className="cursor-pointer"
                    >
                        <img 
                            src="/assets/icons/logout.svg"
                            alt="logout"
                            className='size-6'
                        />
                    </button>
                </footer>
            </div>
        </section>
    )
}
export default NavItems;