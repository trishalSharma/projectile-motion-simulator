function Controls({
  angle,
  setAngle,
  velocity,
  setVelocity,
  gravity,
  setGravity,
  startSimulation,
  resetSimulation,
  isRunning
}) {
  return (
    <div className="space-y-4 text-white">
      <div>
        <label>Angle: {angle}°</label>
        <input
          type="range"
          min="0"
          max="90"
          value={angle}
          disabled={isRunning}
          onChange={(e) => setAngle(Number(e.target.value))}
          className="w-full"
        />
      </div>

      <div>
        <label>Velocity: {velocity} m/s</label>
        <input
          type="range"
          min="5"
          max="50"
          value={velocity}
          disabled={isRunning}
          onChange={(e) => setVelocity(Number(e.target.value))}
          className="w-full"
        />
      </div>

      <div>
        <label>Gravity: {gravity} m/s²</label>
        <input
          type="range"
          min="1"
          max="20"
          value={gravity}
          disabled={isRunning}
          onChange={(e) => setGravity(Number(e.target.value))}
          className="w-full"
        />
      </div>

      <div className="flex gap-4">
        <button
          onClick={startSimulation}
          className="px-4 py-2 bg-green-600 rounded"
        >
          Start
        </button>

        <button
          onClick={resetSimulation}
          className="px-4 py-2 bg-red-600 rounded"
        >
          Reset
        </button>
      </div>
    </div>
  );
}

export default Controls;
