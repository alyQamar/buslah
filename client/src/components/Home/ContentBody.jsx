import LivesessionSeeall from './../Live/LivesessionSeeall';
import LiveSessionCard from './../Live/LiveSessionCard';
import AllPostQa from './../Post/All-Post-qa';
import WritePost from './../Post/WritePost';
import PostCard from './../Post/PostCard';
const ContentBody = () => {
  return (
    <div
      className="w-[680px] h-[1780px] relative bg-stone-50 rounded-2xl border-t overflow-y-scroll
                    flex flex-col pl-[32px] pr-[32px] pt-[30px]"
    >
      <div className="mb-[60px]">
        <div className="mb-[20px]">
          <LivesessionSeeall />
        </div>
        <div className="flex flex-row gap-[30px] overflow-x-scroll">
          <LiveSessionCard />
          <LiveSessionCard />
        </div>
      </div>

      <div>
        <div className="mb-[30px]">
          <AllPostQa />
        </div>
        <div className="mb-[20px]">
          <WritePost />
        </div>
        <div className="flex flex-col gap-[15px]">
          <PostCard />
          <PostCard />
          <PostCard />
          <PostCard />
          <PostCard />
          <PostCard />
          <PostCard />
          <PostCard />
          <PostCard />
          <PostCard />
          <PostCard />
          <PostCard />
          <PostCard />
          <PostCard />
          <PostCard />
          <PostCard />
        </div>
      </div>
    </div>
  );
};

export default ContentBody;
