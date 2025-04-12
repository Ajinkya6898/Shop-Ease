const Spinner = ({ size = "w-5 h-5", color = "border-white" }) => (
  <div
    className={`animate-spin rounded-full border-2 border-t-transparent ${size} ${color}`}
  />
);

export default Spinner;
