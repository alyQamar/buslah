import PropTypes from 'prop-types';

const sizeOptions = {
  sm: {
    imageSize: '10',
    fontSize: 'sm'
  },
  xl: {
    imageSize: '14',
    fontSize: 'lg'
  }
};

const InfoCard = ({ size, name, role, imageSrc }) => {
  const { imageSize, fontSize } = sizeOptions[size];
  return (
    <div className="flex items-center space-x-3">
      <img className={`w-${imageSize} h-${imageSize} rounded-full`} alt="profile photo" src={imageSrc} />
      <div className="flex flex-col">
        <div className={`text-cyan-800 text-${fontSize} font-medium font-montserrat`}>{name}</div>
        <div className={`text-slate-400 text-${fontSize} font-medium font-montserrat`}>{role}</div>
      </div>
    </div>
  );
};

InfoCard.propTypes = {
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  name: PropTypes.string.isRequired,
  role: PropTypes.string.isRequired,
  imageSrc: PropTypes.string.isRequired
};
export default InfoCard;

// const InfoCard = () => {
//   return (
//     <div className="left-[24px] top-[24px] absolute justify-start items-start gap-3 inline-flex">
//       <img className="w-12 h-12 rounded-full" alt="profile photo" src="https://via.placeholder.com/48x48" />
//       <div className="h-12 flex-col justify-start items-start inline-flex">
//         <div className="w-80 text-cyan-800 text-2xl font-medium font-['Montserrat']">Ahmed kamel</div>
//         <div className="w-80 text-slate-400 text-base font-medium font-['Montserrat']">Proudect Design at Google</div>
//       </div>
//     </div>
//   );
// };

// export default InfoCard;
