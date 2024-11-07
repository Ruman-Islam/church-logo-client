const calculateAdditionalItemPrice = (itemArray) => {
  const additionalItems = itemArray?.length > 0 ? itemArray : [];

  const totalPrice = additionalItems.reduce(
    (accumulator, currentValue) => accumulator + currentValue?.price || 0,
    0
  );

  return { additionalItems, totalPrice };
};

export { calculateAdditionalItemPrice };
