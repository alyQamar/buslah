import ProgressBar from "@ramonak/react-progress-bar";

const ProgressBarA = () => {
  return (
    <div style={{width:"236px"}}>
    <ProgressBar
     completed={80}
     maxCompleted={100}
     bgColor="#1D9BF0"
    baseBgColor="#ddd"
     />
    </div>
  )
}//236
//#1D9BF0
export default ProgressBarA
