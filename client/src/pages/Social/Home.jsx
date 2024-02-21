import ContentBody from '../../components/Home/ContentBody';
import RightSideBar from '../../components/Home/RightSideBar';
import SideBar from '../../components/Common/SideNav';
import NavBar from '../../components/Common/NavBar';
const HomePostsPage = () => {
  return (
    <div className="relative">
      <div className="flex justify-center items-center fixed mb-[200px] z-10">
        <NavBar />
      </div>
      <div className="absolute left-[60px] top-[120px]">
        <SideBar />
      </div>
      <div className="absolute right-[60px] top-[120px]">
        <RightSideBar />
      </div>
      <div className="absolute left-[415px] top-[120px]">
        <ContentBody />
      </div>
    </div>
  );
};

export default HomePostsPage;
