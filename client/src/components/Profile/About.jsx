import icon1 from "../../assets/icons/profile/luggage-04.svg";
import icon2 from "../../assets/icons/profile/marker-03.png";
import icon3 from "../../assets/icons/profile/Icon3.svg";
import icon4 from "../../assets/icons/profile/icon4.svg";
import logo1 from "../../assets/icons/profile/Logo Icons.svg";
import logo2 from "../../assets/icons/profile/Logo.svg";
import logo3 from "../../assets/icons/profile/Logo (1).svg";
import logo4 from "../../assets/icons/profile/Logo (2).svg";
import LoggedUser from '../../hooks/Auth/logged-user';

const About = () => {
  const [currentUserData] = LoggedUser();

  const languages = currentUserData?.data.languages.length > 0 ? currentUserData.data.languages.join(', ') : 'Arabic';
  const interests = currentUserData?.data.interests.length > 0 ? currentUserData.data.interests.join(', ') : 'No interests';

  return (
    <div className="w-[742px] h-[390px] relative bg-white rounded-2xl">
      <div className="w-[511px] left-[7%] top-[10%] absolute text-cyan-800 text-[31px] font-semibold font-['Montserrat']">
        About
      </div>
      <div className="left-[32px] top-[102px] absolute flex-col justify-start items-start gap-5 inline-flex">
        <div className="justify-start items-center gap-4 inline-flex">
          <img src={icon1} className="w-6 h-6 px-[2.40px] py-[4.20px] justify-center items-center flex" alt="Icon 1" />
          <div className="w-[511px] text-gray-600 text-[25px] font-medium font-['Montserrat']">{currentUserData.data.headline}</div>
        </div>
        <div className="justify-start items-center gap-4 inline-flex">
          <img src={icon2} className="w-6 h-6 px-[4.49px] py-[2.41px] justify-center items-center flex" alt="Icon 2" />
          <div className="w-[511px] text-gray-600 text-[25px] font-medium font-['Montserrat']">{currentUserData.data.city}, {currentUserData.data.country}</div>
        </div>
        <div className="justify-start items-center gap-4 inline-flex">
          <img src={icon3} className="w-6 h-6 p-[2.40px] justify-center items-center flex" alt="Icon 3" />
          <div className="w-[511px] text-gray-600 text-[25px] font-medium font-['Montserrat']">{languages}</div>
        </div>
        <div className="justify-start items-center gap-4 inline-flex">
          <img src={icon4} className="w-6 h-6 px-[2.40px] py-[4.69px] justify-center items-center flex" alt="Icon 4" />
          <div className="w-[511px] text-gray-600 text-[25px] font-medium font-['Montserrat']">{interests}</div>
        </div>
      </div>
      <div className="w-[252px] left-[32px] top-[310px] absolute justify-start items-center gap-5 inline-flex">
        <div><img src={logo1} alt="Logo 1" /></div>
        <div><img src={logo2} alt="Logo 2" /></div>
        <div><img src={logo3} alt="Logo 3" /></div>
        <div><img src={logo4} alt="Logo 4" /></div>
      </div>
    </div>
  );
};

export default About;
