import HomeContentBody from '@components/HomeContentBody/HomeContentBody';
import HomeRightSideBar from '@components/HomeRightSideBar/HomeRightSideBar';

const Home = () => {
  return (
    <>
      <div className="absolute right-[60px] top-[120px]">
        <HomeRightSideBar />
      </div>
      <div className="absolute left-[415px] top-[120px]">
        <HomeContentBody />
      </div>
    </>
  );
};

export default Home;
