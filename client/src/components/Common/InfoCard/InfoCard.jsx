import PropTypes from 'prop-types';
import moment from 'moment';

const sizeOptions = {
  sm: {
    imageSize: '8',
    nameFontSize: 'sm',
    roleFontSize: 'xs'
  },
  lg: {
    imageSize: '10',
    nameFontSize: 'lg',
    roleFontSize: 'sm'
  },
  xl: {
    imageSize: '16',
    nameFontSize: 'xl',
    roleFontSize: 'base'
  }
};

const InfoCard = ({ size, name, role, imageSrc, createdAt }) => {
  const { imageSize, nameFontSize, roleFontSize } = sizeOptions[size];
  const formattedDate = createdAt ? moment(createdAt).format('DD/MM/YYYY HH:mm A') : null;

  return (
    <div className="flex items-center space-x-3">
      <img className={`w-${imageSize} h-${imageSize} rounded-full`} alt="profile photo" src={imageSrc} />
      <div className="flex flex-col">
        <div className={`text-cyan-800 text-${nameFontSize} font-medium font-montserrat`}>{name}</div>
        <div className={`text-slate-400 text-${roleFontSize} font-medium font-montserrat`}>{role}</div>
        {formattedDate && (
          <div className="text-slate-500 text-xs font-light font-montserrat">{`Created at: ${formattedDate}`}</div>
        )}
      </div>
    </div>
  );
};

InfoCard.propTypes = {
  size: PropTypes.oneOf(['sm', 'lg', 'xl']),
  name: PropTypes.string.isRequired,
  role: PropTypes.string.isRequired,
  imageSrc: PropTypes.string.isRequired,
  createdAt: PropTypes.string
};

export default InfoCard;
