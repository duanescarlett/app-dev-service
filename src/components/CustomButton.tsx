'use client'

interface ButtonProps {
  text: string;
  onClick: () => void;
}

const CustomButton: React.FC<ButtonProps> = ({ text, onClick }) => {
  return (
    <button
      className="mt-5 px-6 py-3 text-sm md:text-base lg:text-lg font-medium text-white bg-blue-500 rounded-lg hover:bg-blue-600 transition duration-200"
      onClick={onClick}
    >
      {text}
    </button>
  );
};

export default CustomButton;
