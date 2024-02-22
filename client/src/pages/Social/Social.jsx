import { Outlet } from 'react-router-dom';

import Navbar from '../../components/Navbar/Navbar';
import SideBar from './../../components/Common/SideNav';

const Social = () => {
  return (
    <div className="relative">
      <div className="flex justify-center items-center fixed mb-[200px] z-10">
        <Navbar />
      </div>
      <div className="absolute left-[60px] top-[120px]">
        <SideBar />
      </div>
      <div className="main-content">
        <Outlet />
      </div>
    </div>
  );
};

export default Social;
