import { Link, useLocation } from 'react-router-dom';

import { sideNavItems } from '@utils/data';
import SideNavItem from '@components/SideNavItem/SideNavItem';
import Footer from '@components/Footer/Footer';
import CommonButton from '../Common/CommonButton/CommonButton';

const SideNav = () => {
  const isSelectedRoute = (name) => {
    return useLocation().pathname.includes(name.toLowerCase());
  };

  return (
    <div className="fixed side-nav w-[284px] bg-stone-50 rounded-lg flex flex-col items-center py-[30px]">
      <div className="flex flex-col gap-[7px] mb-[20px]">
        {sideNavItems.map((navItem) => (
          <Link
            to={navItem.route}
            className={`side-nav-item${isSelectedRoute(navItem.name) ? '-active' : ''} rounded-lg`}
            key={navItem.index}
          >
            <SideNavItem name={navItem.name} icon={navItem.icon} />
          </Link>
        ))}
      </div>
      <div className="flex flex-col items-center gap-[20px]">
        <CommonButton
          className="blue-btn"
          text="Post"
          textSize="2xl"
          fontWeight="semibold"
          width="240px"
          height="56px"
          borderRadius="xl"
        />
        <Footer className="footer" />
      </div>
    </div>
  );
};

export default SideNav;
