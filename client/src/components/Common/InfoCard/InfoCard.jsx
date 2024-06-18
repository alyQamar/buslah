import PropTypes from 'prop-types';

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
    imageSize: '12',
    nameFontSize: 'xl',
    roleFontSize: 'base'
  }
};

const InfoCard = ({ size, name, role, imageSrc }) => {
  const { imageSize, nameFontSize, roleFontSize } = sizeOptions[size];
  return (
    <div className="flex items-center space-x-3">
      <img className={`w-${imageSize} h-${imageSize} rounded-full`} alt="profile photo" src={imageSrc} />
      <div className="flex flex-col">
        <div className={`text-cyan-800 text-${nameFontSize} font-medium font-montserrat`}>{name}</div>
        <div className={`text-slate-400 text-${roleFontSize} font-medium font-montserrat`}>{role}</div>
      </div>
    </div>
  );
};

InfoCard.propTypes = {
  size: PropTypes.oneOf(['sm', 'lg', 'xl']),
  name: PropTypes.string.isRequired,
  role: PropTypes.string.isRequired,
  imageSrc: PropTypes.string.isRequired
};
export default InfoCard;
