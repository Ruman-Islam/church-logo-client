const CrossLoader = () => {
  return (
    <div className="w-full h-screen flex flex-col justify-center items-center">
      <div className="cross__circle">
        <div className="cross__horizontal__line"></div>
        <div className="cross__vertical__line__left"></div>
        <div className="cross__vertical__line__right"></div>
        <div className="cross__circle__animation"></div>
      </div>
    </div>
  );
};

export default CrossLoader;
