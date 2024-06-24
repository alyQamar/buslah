import React, { useState, useRef } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { routes } from '../../routes';
import { useLocation } from 'react-router';
import { useOutsideClick } from 'rooks';
import LoggedUser from '../../hooks/Auth/logged-user';
import SearchBar from '@components/Common/SearchBar/SearchBar';
import ProfileImage from '@common/ProfileImg/ProfileImg';
import NavItem from '@components/Header/NavItem';
import Logo from '@common/Logo/Logo';
import MsgIcon from '@assets/icons/common/message.svg';
import BellIcon from '@assets/icons/common/bell.svg';
import ProfileIcon from '@assets/icons/common/user.svg';
import useLogout from '@hooks/Auth/useLogout';

const Navbar = ({ searchPaths }) => {
  const [currentUserData] = LoggedUser();
  const location = useLocation();

  const isSearchPage = searchPaths.some((path) => location.pathname === path);

  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isNotificationOpen, setIsNotificationOpen] = useState(false);
  const [isMessageOpen, setIsMessageOpen] = useState(false);
  const [logoutConfirmationOpen, setLogoutConfirmationOpen] = useState(false); // State for logout confirmation

  const dropdownRef = useRef();
  const notificationRef = useRef();
  const messageRef = useRef();

  useOutsideClick(dropdownRef, () => {
    setIsDropdownOpen(false);
  });

  useOutsideClick(notificationRef, () => {
    setIsNotificationOpen(false);
  });

  useOutsideClick(messageRef, () => {
    setIsMessageOpen(false);
  });

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
    setIsNotificationOpen(false);
    setIsMessageOpen(false);
  };

  const toggleNotificationDropdown = () => {
    setIsNotificationOpen(!isNotificationOpen);
    setIsMessageOpen(false);
    setIsDropdownOpen(false);
  };

  const toggleMessageDropdown = () => {
    setIsMessageOpen(!isMessageOpen);
    setIsNotificationOpen(false);
    setIsDropdownOpen(false);
  };

  const [loading, error, onLogout] = useLogout();

  const handleLogout = () => {
    setLogoutConfirmationOpen(true); // Open the logout confirmation dialog
  };

  const confirmLogout = () => {
    setLogoutConfirmationOpen(false); // Close the logout confirmation dialog
    onLogout(); // Call the logout function
  };

  return (
    <div className="px-16 py-4 bg-white rounded-xl flex justify-between items-center mx-auto">
      <div className="mx-12">
        <Link to={routes.home}>
          <Logo />
        </Link>
      </div>
      {isSearchPage && <SearchBar width="660px" />}
      <ul className="nav-items flex items-center gap-2 bg-slate-50 rounded-lg px-5 py-3.5 mr-12">
        <li className="relative">
          <NavItem
            iconSrc={MsgIcon}
            altText="Message"
            onClick={toggleMessageDropdown}
            className="nav-item"
          />
          {isMessageOpen && (
            <div ref={messageRef} className="absolute right-0 mt-2 w-48 bg-white shadow-lg rounded-lg border border-gray-200 py-1">
              <span className="block px-4 py-2 text-sm text-gray-700">No messages</span>
            </div>
          )}
        </li>
        <li className="relative">
          <NavItem
            iconSrc={BellIcon}
            altText="Notification"
            onClick={toggleNotificationDropdown}
            className="nav-item"
          />
          {isNotificationOpen && (
            <div ref={notificationRef} className="absolute right-0 mt-2 w-48 bg-white shadow-lg rounded-lg border border-gray-200 py-1">
              <span className="block px-4 py-2 text-sm text-gray-700">No notifications</span>
            </div>
          )}
        </li>
        <li className="relative">
          {currentUserData && currentUserData.data && currentUserData.data.profileImg ? (
            <ProfileImage
              src={currentUserData.data.profileImg}
              alt={`${currentUserData.data.firstName}'s Profile Image`}
              className="user-info nav-item cursor-pointer"
              onClick={toggleDropdown}
            />
          ) : (
            <div className="cursor-pointer" onClick={toggleDropdown}>
              <NavItem
                iconSrc={ProfileIcon}
                altText={`${currentUserData && currentUserData.data ? currentUserData.data.firstName : 'Default'
                  }'s Profile`}
                className="nav-item"
              />
            </div>
          )}
          {isDropdownOpen && (
            <div ref={dropdownRef} className="absolute right-0 mt-2 w-48 bg-white shadow-lg rounded-lg border border-gray-200 py-1">
              <Link to={routes.profile} className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                Profile
              </Link>
              <button
                onClick={handleLogout} // Open confirmation dialog on click
                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 w-full text-left"
                disabled={loading}
              >
                {loading ? 'Logging out...' : 'Logout'}
              </button>
              {error && <span className="text-sm text-red-600 px-4">{error}</span>}
            </div>
          )}
          {/* Logout confirmation dialog */}
          {logoutConfirmationOpen && (
            <div className="fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-50">
              <div className="bg-white p-4 rounded-lg shadow-lg text-center">
                <p className="text-lg font-semibold mb-2">Are you sure you want to logout?</p>
                <div className="flex justify-center gap-4">
                  <button
                    onClick={confirmLogout} // Confirm logout
                    className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg"
                  >
                    Logout
                  </button>
                  <button
                    onClick={() => setLogoutConfirmationOpen(false)} // Cancel logout
                    className="bg-gray-200 hover:bg-gray-300 text-gray-800 px-4 py-2 rounded-lg"
                  >
                    Cancel
                  </button>
                </div>
              </div>
            </div>
          )}
        </li>
      </ul>
    </div>
  );
};

Navbar.propTypes = {
  searchPaths: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Navbar;
