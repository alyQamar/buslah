const ProfileImage = ({ src, alt }) => {
  return (
    <div className="self-stretch justify-start items-center gap-[2px] flex flex-row">
      <img className="w-10 h-10 relative rounded-lg" src={src} alt={alt} />
      {/* You can add more elements related to the profile image if needed */}
    </div>
  );
};

export default ProfileImage;
