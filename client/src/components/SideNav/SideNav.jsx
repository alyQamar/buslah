import { sideNavItems } from '@utils/data';
import SideNavItem from '@components/SideNavItem/SideNavItem';
import PostButton from '@components/PostButton/PostButton';
import Footer from '@components/Footer/Footer';

const SideNav = () => {
  return (
    <div className="fixed side-nav w-[284px] bg-stone-50 rounded-2xl flex flex-col items-center pt-[30px]">
      <div className="flex flex-col gap-[7px] mb-[10px]">
        {sideNavItems.map((navItem, index) => (
          <div key={index} className="rounded-md">
            <SideNavItem name={navItem.name} icon={navItem.icon} />
          </div>
        ))}
      </div>
      <div className="flex flex-col items-center gap-[10px] mb-5">
        <PostButton />
        <Footer className="footer" />
      </div>
    </div>
  );
};

export default SideNav;
