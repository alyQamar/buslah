const NavItem = ({ iconSrc, altText }) => {
  return (
    <div className="w-10 h-10 p-2 bg-white rounded-lg shadow flex items-center justify-center">
      <img src={iconSrc} alt={altText} className="icon w-6 h-6" />
    </div>
  );
};

export default NavItem;
