import liveNow from "../../assets/publicIcons/liveRed.png"

const LiveSessionCard = () => {
  return (

    <div style={{ width: '470px' }}
      className="w-[470px] h-186 bg-white flex flex-col justify-between gap-4 rounded-2xl p-[10px]">
      <div className="flex flex-row">
        <div className="w-80 h-12 justify-start items-start inline-flex">
          <img className="w-12 h-12 rounded-full" src="https://via.placeholder.com/48x48" />
          <div className="h-12 flex-col justify-start items-start inline-flex">
            <div className="w-80 text-cyan-800 text-2xl font-medium font-['Montserrat']">Ahmed kamel</div>
            <div className="w-80 text-slate-400 text-base font-medium font-['Montserrat']">Proudect Design at Google</div>
          </div>
        </div>

        <div className="w-28 h-6 justify-start items-center gap-1 inline-flex">
          <img src={liveNow} className="w-6 h-6 p-0.5 justify-center items-center flex" />
          <div className="w-20 text-red-500 text-base font-medium font-['Montserrat']">Live Now</div>
        </div>
      </div>

      <div className="w-96 h-7 text-slate-600 text-2xl font-normal font-['Montserrat']">User Design Fundamentals</div>


      <button className="w-24 h-10 rounded-md text-white bg-violet-600 text-base font-normal font-['Public Sans'] leading-tight">

        Join Now</button>


    </div>


  )
}

export default LiveSessionCard

// <div className="w-24 h-10 rounded-md flex-col justify-center items-center inline-flex">
//   <div className="self-stretch grow shrink basis-0 px-4 py-1.5 bg-violet-600 justify-center items-center gap-1.5 inline-flex">
//     <div className="text-white text-base font-normal font-['Public Sans'] leading-tight">Join Now</div>
//   </div>
// </div>

// <div className="w-470 h-186 bg-white rounded-2xl shadow flex-col justify-start items-start gap-8 inline-flex">
// <div className="w-96 h-52 relative rounded-2xl">
//   <div className="w-96 h-7 left-[16px] top-[76px] absolute text-slate-600 text-2xl font-normal font-['Montserrat']">User Design Fundamentals</div>
//   <div className="w-10 h-10 left-[24px] top-[17px] absolute" />
//   <div className="w-28 left-[349px] top-[24px] absolute justify-start items-center gap-1 inline-flex">
//     <div className="w-6 h-6 p-0.5 justify-center items-center flex" />
//     <div className="w-20 text-red-500 text-base font-medium font-['Montserrat']">Live Now</div>
//   </div>
//   <div className="w-80 left-[16px] top-[16px] absolute justify-start items-start gap-3 inline-flex">
//     <img className="w-12 h-12 rounded-full" src="https://via.placeholder.com/48x48" />
//     <div className="h-12 flex-col justify-start items-start inline-flex">
//       <div className="w-80 text-cyan-800 text-2xl font-medium font-['Montserrat']">Ahmed kamel</div>
//       <div className="w-80 text-slate-400 text-base font-medium font-['Montserrat']">Proudect Design at Google</div>
//     </div>
//   </div>
//   <div className="w-24 h-10 left-[16px] top-[130px] absolute rounded-md flex-col justify-center items-center inline-flex">
//     <div className="self-stretch grow shrink basis-0 px-4 py-1.5 bg-violet-600 justify-center items-center gap-1.5 inline-flex">
//       <div className="text-white text-base font-normal font-['Public Sans'] leading-tight">Join Now</div>
//     </div>
//   </div>
// </div>
// </div>



