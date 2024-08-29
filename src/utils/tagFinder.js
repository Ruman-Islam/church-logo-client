export const tagFinder = (tag, cartItem) => {
  if (cartItem && cartItem?.requirements?.length) {
    const requirements = cartItem?.requirements;
    const correctTag = requirements.find((item) => item?.tag === tag);
    return correctTag?.answer || "";
  }

  return "";
};
