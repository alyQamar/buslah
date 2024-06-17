import Navbar from '@components/Header/NavBar';
import { routes } from '../../routes';

const Header = () => {
  return (
    <nav>
      <div className="pt-1 bg-slate-50 text-center">
        <p>Free Free Palestine 🍉 </p>
      </div>
      <Navbar searchPaths={[routes.home]} />
    </nav>
  );
};
export default Header;
