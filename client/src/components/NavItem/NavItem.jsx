const NavItem = ({ iconSrc, altText }) => {
  return (
    <div className="w-10 self-stretch p-2 bg-white rounded-lg shadow justify-center items-center inline-flex">
      <img src={iconSrc} alt={altText} className="w-6 h-6 relative flex-col justify-start items-start flex" />
    </div>
  );
};

export default NavItem;
