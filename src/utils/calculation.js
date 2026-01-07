export function calculateMaxHeight(velocity, angle, gravity) {
  const angleIntoRadian = (angle * Math.PI) / 180;
  return (velocity * velocity * Math.sin(angleIntoRadian) ** 2) / (2 * gravity);
}

export function calculateRange(velocity, angle, gravity) {
  const angleIntoRadian = (angle * Math.PI) / 180;
  return (velocity * velocity * Math.sin(2 * angleIntoRadian)) / gravity;
}
