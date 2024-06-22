const AddPostOptionButton = ({ icon, label }) => (
  <button className="flex items-center gap-2 text-black text-base font-medium transition-colors duration-300 hover:text-cyan-800">
    <img src={icon} alt={`${label} icon`} className="w-5 h-5" />
    <span>{label}</span>
  </button>
);

export default AddPostOptionButton;
