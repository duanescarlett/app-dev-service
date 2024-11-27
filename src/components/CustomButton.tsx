'use client'

interface ButtonProps {
  text: string;
  onClick: () => void;
}

const CustomButton: React.FC<ButtonProps> = ({ text, onClick }) => {
  return (
    <button
      className="mt-5 px-6 py-3 text-sm md:text-base lg:text-lg font-medium border-2 border-slate-600 text-white bg-blue-700 rounded-md hover:bg-blue-500 transition duration-200"
      onClick={onClick}
    >
      {text}
    </button>
  );
};

export default CustomButton;
