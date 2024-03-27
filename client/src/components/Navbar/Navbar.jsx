import PropTypes from 'prop-types';

import SearchBar from '@common/SearchBar/SearchBar';
import ProfileImage from '@common/ProfileImg/ProfileImg';
import UserName from '@common/UserName/UserName';
import NavItem from '@components/NavItem/NavItem';
import Logo from '@common/Logo/Logo';

import MsgIcon from '@assets/icons/common/message.svg';
import BellIcon from '@assets/icons/common/bell.svg';
import ProfileIcon from '@assets/icons/common/user.svg';
import { useLocation } from 'react-router';
import { routes } from '../../routes';
import { Link } from 'react-router-dom';
import LoggedUser from '../../hooks/Auth/logged-user';

const Navbar = ({ searchPaths }) => {
  const [currentUserData] = LoggedUser();
  console.log(currentUserData);
  const location = useLocation();
  const isSearchPage = searchPaths.some((path) => location.pathname === path);

  return (
    <div className="px-[104px] py-4 bg-white rounded-xl flex justify-between items-center mx-auto">
      <Link to={routes.home}>
        <Logo />
      </Link>
      {isSearchPage && <SearchBar width="700px" />}
      <ul className="nav-items flex items-center gap-2 bg-slate-50 rounded-lg px-4 py-3.5">
        <NavItem iconSrc={MsgIcon} altText="Message" className="nav-item" />
        <NavItem iconSrc={BellIcon} altText="Notification" className="nav-item" />

        {currentUserData && currentUserData.data && currentUserData.data.profileImg ? (
          <>
            <ProfileImage
              src={currentUserData.data.profileImg}
              alt={`${currentUserData.data.firstName}'s Profile Image`}
              className="user-info nav-item"
            />
            <UserName name={currentUserData.data.firstName} className="user-info nav-item" />
          </>
        ) : (
          <div className="flex items-center justify-center space-x-2">
            <NavItem
              iconSrc={ProfileIcon}
              altText={`${
                currentUserData && currentUserData.data ? currentUserData.data.firstName : 'Default'
              }'s Profile Image`}
              className="nav-item"
            />
            <UserName name={currentUserData?.data?.firstName} className="user-info nav-item" />
          </div>
        )}
      </ul>
    </div>
  );
};

Navbar.propTypes = {
  searchPaths: PropTypes.arrayOf(PropTypes.string).isRequired
};

export default Navbar;
