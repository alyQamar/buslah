const SideNavItem = ({ name, icon }) => {
  return (
    <div className="w-[236px] h-11 px-3 py-6 justify-start items-center gap-2 inline-flex">
      <img src={icon} alt={name} className="icon w-6 h-6 relative " />
      <div className="grow shrink basis-0 text-gray-700 text-base font-medium font-['Public Sans'] leading-normal ">
        <span>{name}</span>
      </div>
    </div>
  );
}; //bg-stone-50 && bg-cyan-800

export default SideNavItem;
