
import PropTypes from 'prop-types';
import Link1 from '../Link1/Link1';

const NavBar = () => {
    const routes = [
        { id: 1, path: '/', name: 'Home' },
        { id: 2, path: '/about', name: 'About' },
        { id: 3, path: '/services', name: 'Services' },
        { id: 4, path: '/contact', name: 'Contact' },
        { id: 5, path: '*', name: 'Not Found' }
      ];
      
    return (
        <nav>
            <ul className="md: flex">
            {
                routes.map(route => <Link1 route={route}></Link1> )
            }
            </ul>
        </nav>
    );
};

export default NavBar;