
const AllPostQa = () => {
  return (
    <div className="w-622 flex flex-row justify-between">

      <div className="flex flex-row justify-around gap-8">
          <div className="w-10 h-9 relative">
          <div className="w-8 left-[5px] top-0 absolute text-cyan-800 text-2xl font-medium font-['Montserrat']">All</div>
          <div className="w-10 h-px left-0 top-[37px] absolute border-2"></div>
          </div>

          <div className="w-10 h-9 relative">
          <div className="w-8 left-[-5px] top-0 absolute text-cyan-800 text-2xl font-medium font-['Montserrat']">Posts</div>
          <div className="w-10 h-px left-0 top-[37px] absolute border-2"></div>
          </div>

          <div className="w-10 h-9 relative">
          <div className="w-8 left-[5px] top-0 absolute text-cyan-800 text-2xl font-medium font-['Montserrat']">Q&A</div>
          <div className="w-10 h-px left-0 top-[37px] absolute border-2"></div>
          </div>

      </div>
      <div>
        <span className="text-gray-700 text-base font-medium font-Montserrat">Sort by :</span>
        <span className="text-gray-700 text-base font-semibold font-Montserrat"> Following</span>
      </div>

    </div>
  )
}

export default AllPostQa
