import { Outlet } from 'react-router-dom';

import SideNav from '@components/SideNav/SideNav';
import Header from '@components/Header/Header';

const Social = () => {
  return (
    <div className="relative">
      <header className="w-full fixed mb-[200px] z-10">
        <Header />
      </header>
      <nav className="absolute left-[60px] top-[120px]">
        <SideNav />
      </nav>
      <main className="main-content">
        <Outlet />
      </main>
    </div>
  );
};

export default Social;
