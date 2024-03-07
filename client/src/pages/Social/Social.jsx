import { Outlet } from 'react-router-dom';

import SideNav from '../../components/SideNav/SideNav';
import Header from '@components/Header/Header';

const Social = () => {
  return (
    <div className="relative">
      <div className="w-full flex justify-center items-center fixed mb-[200px] z-10 ">
        <Header />
      </div>
      <div className="absolute left-[60px] top-[120px]">
        <SideNav />
      </div>
      <div className="main-content">
        <Outlet />
      </div>
    </div>
  );
};

export default Social;
