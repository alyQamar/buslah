const ProfileImage = ({ src, alt }) => {
  return (
    <div className="flex items-center">
      <img className="w-10 h-10 relative rounded-lg " src={src} alt={alt} />
    </div>
  );
};

export default ProfileImage;
