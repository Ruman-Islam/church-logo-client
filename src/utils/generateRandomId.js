import { v4 as uuidv4 } from "uuid";

export const generateRandomId = () => {
  let result = uuidv4();

  return result.trim();
};
