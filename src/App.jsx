import { useState } from "react";
import Canvas from "./components/Canvas";
import Controls from "./components/Controls";
import Stats from "./components/Stats";

function App() {
  const [angle, setAngle] = useState(45);
  const [velocity, setVelocity] = useState(40);
  const [gravity, setGravity] = useState(9.8);
  const [isRunning, setIsRunning] = useState(false);

  const startSimulation = () => setIsRunning(true);
  const resetSimulation = () => setIsRunning(false);

  return (
    <div className="min-h-screen bg-gray-900 p-6 grid grid-cols-1 md:grid-cols-3 gap-6">
      <div className="md:col-span-2">
        <Canvas
          angle={angle}
          velocity={velocity}
          gravity={gravity}
          isRunning={isRunning}
        />
      </div>

      <div className="space-y-6">
        <Controls
          angle={angle}
          setAngle={setAngle}
          velocity={velocity}
          setVelocity={setVelocity}
          gravity={gravity}
          setGravity={setGravity}
          startSimulation={startSimulation}
          resetSimulation={resetSimulation}
          isRunning={isRunning}
        />
        <Stats velocity={velocity} angle={angle} gravity={gravity} />
      </div>
    </div>
  );
}

export default App;
