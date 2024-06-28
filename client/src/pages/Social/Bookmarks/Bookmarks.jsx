import BookmarksContentBody from '@components/BookmarksContentBody/BookmarksContentBody';
import HomeContentBody from '@components/Home/HomeContentBody';
import HomeRightSideBar from '@components/Home/HomeRightSideBar';

const Bookmarks = () => {
  return (
    <>
      <div className="fixed right-[60px] top-[120px]">
        <HomeRightSideBar />
      </div>
      <div className="absolute left-[415px] top-[120px]">
        <BookmarksContentBody />
      </div>
    </>
  );
};

export default Bookmarks;
