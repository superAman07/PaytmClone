import { Link } from 'react-router-dom';

function Button({label,onPress}) {
  return (
    <div className="flex justify-center">
      <button
        onClick={onPress} 
        className="relative inline-block px-4 py-2 text-gray-300 font-mono border-2 border-gray-500 rounded transition-all duration-[0.5s] ease-[cubic-bezier(0.55,0,0.1,1)] cursor-pointer mr-5 no-underline hover:shadow-[8px_8px_0px_#5e5e5e,-8px_-8px_0px_#5e5e5e] text-sm md:text-base lg:text-lg"
      >
        {label}
      </button>
    </div>
  );
}

export default Button;
