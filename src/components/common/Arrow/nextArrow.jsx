import { FaArrowRight } from "react-icons/fa";

const NextArrow = (props) => {
  const { onClick } = props;
  return (
    <div
      onClick={onClick}
      className="absolute -right-[60px] md:-right-[55px] text-white duration-200 hover:cursor-pointer rounded-full h-[100px] max-w-[100px] w-full flex items-center justify-start z-50 bg-black bg-opacity-20 hover:bg-opacity-30 p-2"
    >
      <FaArrowRight size={23} />
    </div>
  );
};

export default NextArrow;
