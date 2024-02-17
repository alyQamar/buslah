import img from '../../assets/mainSVG/Image.svg'
import search from '../../assets/mainSVG/search.svg'
import msg from '../../assets/mainSVG/Left Icon (2).svg'
import notify from '../../assets/mainSVG/bell-02.svg'
const NavBar = () => {
  return (
    <div className="w-[1440px] h-[100px] px-[104px] py-4 bg-white rounded-xl justify-center items-center gap-6 inline-flex">
      <div className="text-black text-2xl font-normal font-['Luminari']">BUSLAH</div>
      <div className="w-[838px] h-[54px] px-2 rounded-lg shadow border border-cyan-800 justify-start items-center gap-2 flex">
        <img src={search} />
        <input type='search' placeholder="Search" className="w-full h-full relative outline-none" />
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

  )
}

export default NavBar


// <form>
//     <label for="default-search" class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
//     <div class="relative">
//         <div class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
//             <svg class="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
//                 <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
//             </svg>
//         </div>
//         <input type="search" id="default-search"
//         class="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500
//         focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white
//          dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search Mockups, Logos..." required>
//         <button type="submit" class="text-white absolute end-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Search</button>
//     </div>
// </form>

// <div className="w-[1440px] h-[100px] px-[104px] py-4 bg-white rounded-xl justify-center items-center gap-6 inline-flex">
//     <div className="text-black text-2xl font-normal font-['Luminari']">BUSLAH</div>
//     <div className="w-[838px] h-[54px] px-2 rounded-lg shadow border border-cyan-800 justify-start items-center gap-2 flex">
//         <div className="w-4 h-4 relative" />
//         <div className="text-slate-500 text-base font-medium font-['Montserrat']">Search </div>
//     </div>
//     <div className="w-[237px] pl-4 pr-2 py-3.5 bg-slate-50 rounded-lg justify-end items-start gap-2 flex">
//         <div className="w-10 self-stretch p-2 bg-white rounded-lg shadow justify-center items-center inline-flex">
//             <div className="w-6 h-6 relative flex-col justify-start items-start flex" />
//         </div>
//         <div className="w-10 self-stretch p-2 bg-white rounded-lg shadow justify-center items-center inline-flex">
//             <div className="w-6 h-6 relative flex-col justify-start items-start flex" />
//         </div>
//         <div className="self-stretch justify-start items-center gap-2 inline-flex">
//             <img className="w-10 h-10 relative rounded-lg" src="https://via.placeholder.com/40x40" />
//             <div className="w-[69px] flex-col justify-start items-start inline-flex">
//                 <div className="text-gray-950 text-base font-semibold font-['Public Sans'] leading-normal">Ahmed K</div>
//             </div>
//         </div>
//     </div>
// </div>
