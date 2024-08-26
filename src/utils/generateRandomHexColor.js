export function generateRandomHexColor() {
  // Generate a random number between 0 and 0xFFFFFF, convert it to hexadecimal, and pad with leading zeros if necessary
  const randomColor = Math.floor(Math.random() * 16777215).toString(16);

  // Ensure the color is always 6 digits long by padding with zeros if needed
  return `#${randomColor.padStart(6, "0")}`;
}
