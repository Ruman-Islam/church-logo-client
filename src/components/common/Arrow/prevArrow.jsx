import { FaArrowLeft } from "react-icons/fa";

const PrevArrow = (props) => {
  const { onClick } = props;
  return (
    <div
      onClick={onClick}
      className="absolute -left-[65px] text-white duration-200 hover:cursor-pointer rounded-full h-[100px] max-w-[100px] w-full flex items-center justify-end z-50 bg-black bg-opacity-20 hover:bg-opacity-30 p-2"
    >
      <FaArrowLeft size={23} />
    </div>
  );
};

export default PrevArrow;
