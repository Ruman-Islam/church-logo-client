import dateAndTime from "./dateAndTime";

const getTimeDifference = (dateTime) => {
  const now = new Date();
  const messageDate = new Date(dateTime);
  const diffInMs = now - messageDate; // Difference in milliseconds

  // Convert milliseconds to different time units
  const diffInSeconds = Math.floor(diffInMs / 1000);
  const diffInMinutes = Math.floor(diffInSeconds / 60);
  const diffInHours = Math.floor(diffInMinutes / 60);
  const diffInDays = Math.floor(diffInHours / 24);

  // Handle different cases for time difference
  if (diffInSeconds < 60) {
    return "just now";
  } else if (diffInMinutes < 60) {
    return `${diffInMinutes}m`; // Minutes ago
  } else if (diffInHours < 24) {
    return `${diffInHours}h`; // Hours ago
  } else if (diffInDays === 1) {
    return "yesterday";
  } else if (diffInDays < 8) {
    return `${diffInDays}d`; // Days ago, up to a week
  } else {
    // Format to actual date if it's older than a week
    return dateAndTime(messageDate).date; // You can format this to 'MM/DD/YYYY' if needed
  }
};

export default getTimeDifference;


