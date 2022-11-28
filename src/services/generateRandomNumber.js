export const generateRandomNumber = () => {
  const number = Math.floor(Math.random() * (1000 - 100)) + 100;
  return number;
};
