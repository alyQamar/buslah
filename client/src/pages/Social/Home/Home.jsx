import HomeContentBody from '@components/Home/HomeContentBody';
import HomeRightSideBar from '@components/Home/HomeRightSideBar';

const Home = () => {
  return (
    <>
      <div className="fixed right-[60px] top-[120px]">
        <HomeRightSideBar />
      </div>
      <div className="absolute left-[415px] top-[120px]">
        <HomeContentBody />
      </div>
    </>
  );
};

export default Home;
