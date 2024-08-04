const packagePriceConversion = (pg) => {
  if (pg?.savings) {
    return (pg?.basePrice * pg?.savings) / 100 - 0.01;
  } else {
    return pg?.basePrice - 0.01;
  }
};

export { packagePriceConversion };
