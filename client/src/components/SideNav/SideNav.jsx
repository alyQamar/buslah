import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { sideNavItems } from '@utils/data';
import SideNavItem from '@components/SideNav/SideNavItem';
import Footer from '@components/Footer/Footer';
import CommonButton from '@common/CommonButton/CommonButton';
import AddContentModal from '@components/Feed/AddContentModal';

const SideNav = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

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
            key={navItem.id}
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
          onClick={openModal}
        />
        <Footer className="footer" />
      </div>
      {isModalOpen && <AddContentModal isOpen={isModalOpen} onClose={closeModal} />}
    </div>
  );
};

export default SideNav;
