import "../toolTip.css";
// eslint-disable-next-line react/prop-types
const Tooltip = ({ position, text, children }) => {
  const tooltipClassName = `tooltip tooltip-${position}`;
  return (
    <div className="tooltip-container">
      {children}
      <div className={tooltipClassName}>{text}</div>
    </div>
  );
};

export default Tooltip;
