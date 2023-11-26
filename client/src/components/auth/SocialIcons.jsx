import facebook from '../../assets/authSVG/facebook.svg'
import twitter from '../../assets/authSVG/Twitter.svg'
import linkedin from '../../assets/authSVG/in.svg'
import google from '../../assets/authSVG/google.svg'


const SocialIcons = () => {
  return (
    <div  className="w-[196px] h-[41px] flex flex-row justify-around">

    <a href='#' className="w-10 h-10 relative flex-col justify-start items-start inline-flex">
    <img src={facebook} className="w-10 h-10 bg-blue-600 rounded-full"/>
    </a>
    <a href='#' className="w-10 h-10 relative flex-col justify-start items-start inline-flex">
    <img src={twitter} className="w-10 h-10 bg-sky-500 rounded-full"/>
    </a>
    <a href='#' className="w-10 h-10 relative flex-col justify-start items-start inline-flex">
    <img src={linkedin} className="w-10 h-10 bg-sky-600 rounded-full"/>
    </a>
    <a href='#' className="w-10 h-10 relative flex-col justify-start items-start inline-flex">
    <img src={google} className="w-10 h-10 bg-neutral-100 rounded-full"/>
    </a>
    </div>
  )
}

export default SocialIcons


