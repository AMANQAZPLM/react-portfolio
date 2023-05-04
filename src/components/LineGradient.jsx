const LineGradient = ({
  width = "w-full",
  bgrd = "bg-gradient-rainblue",
  opacity = "opacity-100",
}) => {
  return <div className={` h-0.5 ${width} ${bgrd} ${opacity}`} />;
};

export default LineGradient;
