export const getTransition = (
  delay: number = 0,
  duration: number = 0.5,
  ease: string = "easeInOut"
) => {
  return {
    delay,
    duration,
    ease,
  };
};
