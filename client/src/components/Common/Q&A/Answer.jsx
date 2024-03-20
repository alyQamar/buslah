import helpful from "../../../assets/icons/helpful.svg"
import unhelpful from "../../../assets/icons/unhelpful.svg"
import send from "../../../assets/icons/send.svg"
import save from "../../../assets/icons/save.svg"

const Answer = () => {
  return (
    <div>
    <div className="left-[40px] top-[160px] absolute justify-start items-start gap-3 inline-flex">
    <img className="w-12 h-12 rounded-full" src="https://via.placeholder.com/48x48" />
    <div className="h-12 flex-col justify-start items-start inline-flex">
    <div className="w-80 text-cyan-800 text-2xl font-medium font-['Montserrat']">Ahmed kamel</div>
    <div className="w-80 text-slate-400 text-base font-medium font-['Montserrat']">Proudect Design at Google</div>
    </div>
</div>

<div className="w-[484px] min-h-[62px] left-[100px] top-[226px] absolute">
<div className="text-gray-700 text-base font-normal font-['Montserrat'] leading-tight">You have to be burning with an idea, or a problem, or a wrong that you want to right.
 If you’re not passionate enough from the start, you’ll never stick it out... </div>
<span className=" text-gray-700 text-base font-medium font-['Montserrat'] underline leading-tight">See More</span>
</div>

<div className="w-[420px] h-12 left-[100px] top-[300px] absolute justify-start items-center gap-10 inline-flex">
<div className="justify-start items-center gap-2 flex">
<img src={helpful} className="w-6 h-6 p-[2.40px] justify-center items-center flex" />
<div className="text-cyan-800 text-base font-medium font-['Montserrat'] leading-tight">helpful</div>
</div>
<div className="justify-center items-center gap-1 flex">
<img src={unhelpful} className="w-6 h-6 p-[2.40px] justify-center items-center flex" />
<div className="text-black text-base font-normal font-['Montserrat'] leading-tight">Unhelpful</div>
</div>
<div className="justify-start items-center gap-2 flex">
<img src={send} className="w-6 h-6 p-[2.40px] justify-center items-center flex" />
<div className="text-gray-700 text-base font-normal font-['Montserrat'] leading-tight">Send</div>
</div>
<div className="justify-center items-center gap-2 flex">
<div className="w-6 h-6 justify-center items-center flex">
<img src={save} className="grow shrink basis-0 self-stretch px-[4.80px] py-[2.40px] justify-center items-center inline-flex" />
</div>
<div className="text-gray-700 text-base font-normal font-['Montserrat'] leading-tight">Save</div>
</div>
</div>
    </div>
  )
}

export default Answer
