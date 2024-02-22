const UserName = ({ name }) => {
  return (
    <div className="w-[75px] justify-start items-start">
      <div className="text-gray-950 text-base font-semibold font-['Public Sans'] leading-normal">{name}</div>
    </div>
  );
};

export default UserName;
