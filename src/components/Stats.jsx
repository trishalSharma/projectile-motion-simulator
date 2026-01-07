import { calculateMaxHeight, calculateRange } from "../utils/calculation";

export default function Stats({ velocity, angle, gravity }) {
  const maxHeight = calculateMaxHeight(velocity, angle, gravity).toFixed(2);
  const range = calculateRange(velocity, angle, gravity).toFixed(2);

  return (
    <div className=" text-yellow-500 space-y-2">
      <p>Max Height: {maxHeight} m</p>
      <p>Range: {range} m</p>
    </div>
  );
}


