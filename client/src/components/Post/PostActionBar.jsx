import { postActionItems } from '@shared/utils/data';

const PostActionBar = () => {
  return (
    <div className="flex justify-between items-center w-full p-2">
      {postActionItems.map(({ key, ActionIcon, label }) => (
        <div key={key} className="flex items-center gap-2 cursor-pointer hover:text-custom-blue-btn-hover transition-colors">
          {ActionIcon && <ActionIcon fillColor="none" stroke="#2D3748" />}
          <div className="text-custom-text-color-p text-base font-medium">
            {label}
          </div>
        </div>
      ))}
    </div>
  );
};

export default PostActionBar;
