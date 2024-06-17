import AllPostQa from '@components/Home/SocialFeed';
import WritePost from '@components/Post/WritePost';
import PostCard from '@components/Post/PostCard';
const HomeContentBody = () => {
  return (
    <div
      className="w-[680px] h-[1780px] relative bg-stone-50 rounded-2xl border-t
                    flex flex-col pl-[32px] pr-[32px] pt-[30px]"
    >
      <div>
        <div className="mb-[30px]">
          <AllPostQa />
        </div>
        {/* <div className="mb-[20px]">
          <WritePost />
        </div> */}
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

export default HomeContentBody;
