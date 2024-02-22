import SearchInput from '@common/SearchInput/SearchInput';
import ProfileImage from '@common/ProfileImg/ProfileImg';
import UserName from '@common/UserName/UserName';
import NavItem from '@components/NavItem/NavItem';
import Logo from '@common/Logo/Logo';

import msgIcon from '@assets/icons/Message.svg';
import notifyIcon from '@assets/icons/Bell.svg';
import profileImg from '@assets/Images/ProfileImage.svg';

const Navbar = () => {
  return (
    <div className="w-[1440px] h-[100px] px-[104px] py-4 bg-white rounded-xl justify-center items-center gap-6 inline-flex">
      <Logo />
      <SearchInput />
      <ul className="nav-items w-[237px] pl-4 pr-2 py-3.5 bg-slate-50 rounded-lg items-start gap-[4px] flex flex-row">
        <NavItem iconSrc={msgIcon} altText="Message" className="nav-item" />
        <NavItem iconSrc={notifyIcon} altText="Notification" className="nav-item" />
        <ProfileImage src={profileImg} alt="Profile" className="user-info nav-item" />
        <UserName name="Ahmed K" className="user-info nav-item" />
      </ul>
    </div>
  );
};

export default Navbar;
