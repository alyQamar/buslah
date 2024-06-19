import PostCard from '@components/Post/PostCard';
import SocialFeedFilter from './SocialFeedFilter';
import QuestionCard from '@components/Q&A/QuestionCard';
import AddContent from './AddContent';
const HomeContentBody = () => {
  return (
    <div
      className="w-[680px] h-[1780px] relative bg-stone-50 rounded-2xl border-t
                    flex flex-col pl-[32px] pr-[32px] pt-[30px]"
    >
      <div>
        <div className="mb-[30px]">
          <SocialFeedFilter />
        </div>
        <div className="mb-[20px]">
          <AddContent />
        </div>
        <div className="flex flex-col gap-[15px]">
          <QuestionCard question="How can i start Web Development ?" />
          <PostCard post="Eid with Buslah!!" />
          <QuestionCard question="How can i start UX\UI Design ?" />
          <PostCard post="Eid with Buslah!!" />
          <QuestionCard question="How can i start UX\UI Design ?" />
          <PostCard post="Eid with Buslah!!" />
        </div>
      </div>
    </div>
  );
};

export default HomeContentBody;
