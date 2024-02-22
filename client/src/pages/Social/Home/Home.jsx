import ContentBody from './../../../components/Home/ContentBody';
import RightSideBar from './../../../components/Common/RightSideBar';

const Home = () => {
  return (
    <>
      <div className="absolute right-[60px] top-[120px]">
        <RightSideBar />
      </div>
      <div className="absolute left-[415px] top-[120px]">
        <ContentBody />
      </div>
    </>
  );
};

export default Home;
