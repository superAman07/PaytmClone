import { Link } from "react-router-dom";

export const BottomWarning = ({ label, buttonText, to }) => {
    return (
        <div className="text-center text-gray-500 text-sm md:text-base lg:text-lg">
            {label} <Link to={to} className="text-blue-400 hover:underline">{buttonText}</Link>
        </div>
    );    
}
