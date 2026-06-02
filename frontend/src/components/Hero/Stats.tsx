import { useCountUp } from "../../hooks/useCountUp";

const Stat = ({ num, label }: { num: string; label: string }) => {
  const numericValue = parseInt(num); // extract number
  const count = useCountUp(numericValue);

  return (
    <div className="fh-stat">
      <span className="fh-stat-num">
        {count}
        {num.includes("+") && "+"}
        {num.includes("K") && "K"}
        {num.includes("★") && "★"}
      </span>
      <span className="fh-stat-label">{label}</span>
    </div>
  );
};

export default Stat