import logo from '../../assets/authSVG/logo.svg'

const Logo = () => {
  return (
    <div className='logo'>
    <div className="w-[135.53px] h-[30px] relative">
    <img src={logo} className='py-1'/>
    <div className="left-[32.53px] top-0 absolute text-white text-2xl font-normal font-['Montserrat']">BUSLAH</div>
    </div>
    </div>
  )
}

export default Logo

// text-white
