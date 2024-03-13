import PropTypes from 'prop-types';

import SearchInput from '@common/SearchInput/SearchInput';
import ProfileImage from '@common/ProfileImg/ProfileImg';
import UserName from '@common/UserName/UserName';
import NavItem from '@components/NavItem/NavItem';
import Logo from '@common/Logo/Logo';

import MsgIcon from '@assets/icons/message.svg';
import BellIcon from '@assets/icons/bell.svg';
import ProfileImg from '@assets/images/ProfileImage.svg';
import { useLocation } from 'react-router';
import { routes } from '../../routes';
import { Link } from 'react-router-dom';
import LoggedUser from '../../hooks/Auth/logged-user';

const Navbar = ({ searchPaths }) => {
  const [currentUserData] = LoggedUser();
console.log("ccc",currentUserData)
  const location = useLocation();
  const isSearchPage = searchPaths.some((path) => location.pathname === path);

  return (
    <div className="px-[104px] py-4 bg-white rounded-xl flex justify-between items-center mx-auto">
      <Link to={routes.home}>
        <Logo />
      </Link>
      {isSearchPage && <SearchInput />}
      <ul className="nav-items flex items-center gap-2 bg-slate-50 rounded-lg px-4 py-3.5">
        <NavItem iconSrc={MsgIcon} altText="Message" className="nav-item" />
        <NavItem iconSrc={BellIcon} altText="Notification" className="nav-item" />
        <ProfileImage src={ProfileImg} alt="Profile" className="user-info nav-item" />
        <UserName name="Ahmed K" className="user-info nav-item" />
      </ul>
    </div>
  );
};

Navbar.propTypes = {
  searchPaths: PropTypes.arrayOf(PropTypes.string).isRequired
};

export default Navbar;
