import img from '../../assets/mainSVG/Image.svg';
import msg from '../../assets/mainSVG/Left Icon (2).svg';
import notify from '../../assets/mainSVG/bell-02.svg';
import SearchInput from '../Common/SearchInput';
const NavBar = () => {
  return (
    <div className="w-[1440px] h-[100px] px-[104px] py-4 bg-white rounded-xl justify-center items-center gap-6 inline-flex">
      <div className="text-black text-2xl font-normal font-['Luminari']">BUSLAH</div>
      <div>
        <SearchInput />
      </div>
      <div className="w-[237px] pl-4 pr-2 py-3.5 bg-slate-50 rounded-lg items-start gap-[4px] flex flex-row">
        <div className="w-10 self-stretch p-2 bg-white rounded-lg shadow justify-center items-center inline-flex">
          <img src={msg} className="w-6 h-6 relative flex-col justify-start items-start flex" />
        </div>
        <div className="w-10 self-stretch p-2 bg-white rounded-lg shadow justify-center items-center inline-flex">
          <img src={notify} className="w-6 h-6 relative flex-col justify-start items-start flex" />
        </div>
        <div className="self-stretch justify-start items-center gap-[2px] flex flex-row">
          <img className="w-10 h-10 relative rounded-lg" src={img} />
          <div className="w-[75px] justify-start items-start">
            <div className="text-gray-950 text-base font-semibold font-['Public Sans'] leading-normal">Ahmed K</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
