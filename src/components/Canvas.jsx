import { useRef, useEffect } from "react";

function Canvas({ angle, velocity, gravity, isRunning }) {
  const canvasRef = useRef(null);
  const animationRef = useRef(null);
  const timeRef = useRef(0);
  const pointsRef = useRef([]);

  useEffect(() => {
    if (!isRunning) return;

    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    const width = canvas.width;
    const height = canvas.height;

    const angleRad = (angle * Math.PI) / 180;
    const vx = velocity * Math.cos(angleRad);
    const vy = velocity * Math.sin(angleRad);

    timeRef.current = 0;
    pointsRef.current = [];

    function animate() {
      ctx.clearRect(0, 0, width, height);

      const t = timeRef.current;
      const x = vx * t;
      const y = vy * t - 0.5 * gravity * t * t;

      if (y < 0) {
        cancelAnimationFrame(animationRef.current);
        return;
      }

      const scale = 5;
      const drawX = x * scale;
      const drawY = height - y * scale;

      pointsRef.current.push({ x: drawX, y: drawY });

      // Draw trajectory
      ctx.beginPath();
      pointsRef.current.forEach((p, i) => {
        if (i === 0) ctx.moveTo(p.x, p.y);
        else ctx.lineTo(p.x, p.y);
      });
      ctx.strokeStyle = "white";
      ctx.stroke();

      // Draw projectile
      ctx.beginPath();
      ctx.arc(drawX, drawY, 6, 0, Math.PI * 2);
      ctx.fillStyle = "red";
      ctx.fill();

      timeRef.current += 0.05;
      animationRef.current = requestAnimationFrame(animate);
    }

    animate();

    return () => cancelAnimationFrame(animationRef.current);
  }, [isRunning, angle, velocity, gravity]);

  return (
    <canvas
      ref={canvasRef}
      width={800}
      height={400}
      className="border border-gray-600 bg-black"
    />
  );
}

export default Canvas;
