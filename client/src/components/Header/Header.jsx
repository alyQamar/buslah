import Navbar from '@components/Header/NavBar';
import { routes } from '../../routes';

const Header = () => {
  return (
    <nav>
      <div className="pt-1 bg-slate-50 text-center">
        <a href="https://stand-with-palestine.org/">Free Free Palestine 🍉</a>
      </div>
      <Navbar searchPaths={[routes.home]} />
    </nav>
  );
};
export default Header;
