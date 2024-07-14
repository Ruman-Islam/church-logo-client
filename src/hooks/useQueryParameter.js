import { useState } from "react";

const useQueryParameter = (options) => {
  const [dynamicUrl, setDynamicUrl] = useState(options);

  const handleShowMoreItems = () => {
    setDynamicUrl((prev) => ({ ...prev, limit: prev.limit + 4 }));
  };

  return { dynamicUrl, handleShowMoreItems };
};

export default useQueryParameter;
