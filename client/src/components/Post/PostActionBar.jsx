import { postActionItems } from '@shared/utils/data';
import { useState } from 'react';

const PostActionBar = ({ onLikeClick, onCommentClick }) => {
  const [actionStates, setActionStates] = useState(
    postActionItems.map(() => ({ filled: false, hovered: false }))
  );

  const handleActionClick = (index) => {
    const newActionStates = [...actionStates];
    if (index !== 1) {
      newActionStates[index] = { ...newActionStates[index], filled: !newActionStates[index].filled };
      setActionStates(newActionStates);
    }
    if (index === 0) {
      onLikeClick(!newActionStates[index].filled);
    } else if (index === 1) {
      onCommentClick(true);
    }
  };

  const handleActionHover = (index, isHovered) => {
    const newActionStates = [...actionStates];
    newActionStates[index] = { ...newActionStates[index], hovered: isHovered };
    setActionStates(newActionStates);
  };

  return (
    <div className="flex justify-between items-center w-full p-2">
      {postActionItems.map(({ key, ActionIcon, label }, index) => (
        <div
          key={key}
          className="flex items-center gap-2 cursor-pointer transition-colors"
          onClick={() => handleActionClick(index)}
          onMouseEnter={() => handleActionHover(index, true)}
          onMouseLeave={() => handleActionHover(index, false)}
        >
          {ActionIcon && (
            <ActionIcon
              fillColor={
                actionStates[index].filled || actionStates[index].hovered
                  ? '#295576'
                  : 'none'
              }
              stroke="#295576"
            />
          )}
          <div className="text-custom-text-color-p text-base font-medium">
            {label}
          </div>
        </div>
      ))}
    </div>
  );
};

export default PostActionBar;
