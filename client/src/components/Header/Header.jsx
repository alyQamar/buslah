import Navbar from '@components/NavBar/NavBar';
import { routes } from '../../routes';

const Header = () => {
  return (
    <>
      <Navbar searchPaths={[routes.home]} />
    </>
  );
};
export default Header;
