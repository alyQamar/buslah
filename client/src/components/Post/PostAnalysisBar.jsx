import PropTypes from 'prop-types';
import { postAnalysisItems } from '@shared/utils/data';

const PostAnalysisBar = ({ likesNo, commentsNo, sharesNo }) => {
  const analysisNumbers = { likes: likesNo, comments: commentsNo, shares: sharesNo };

  return (
    <div className="flex justify-between items-center w-full p-3">
      {postAnalysisItems.map(({ key, icon, name }, index) => (
        <div key={key} className="flex items-center gap-2">
          <div className="flex justify-center items-center w-6 h-6">
            {icon && <img
              src={icon}
              alt={`${name} icon`}
              className="w-full h-full"
            />}
          </div>
          <div className="text-gray-700 text-sm font-medium">
            {analysisNumbers[key]} {name}
          </div>
        </div>
      ))}
    </div>
  );
};

PostAnalysisBar.propTypes = {
  likesNo: PropTypes.number.isRequired,
  commentsNo: PropTypes.number.isRequired,
  sharesNo: PropTypes.number.isRequired,
};

export default PostAnalysisBar;
