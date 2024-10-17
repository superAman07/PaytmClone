import { Link } from "react-router-dom";

export const AppBar = () => {
    return (
        <div className="flex justify-between items-center p-4 text-white">
            <Link to={"/"} className="flex items-center">
                <span className="font-bold text-xl" style={{ fontFamily: 'sans-serif' }}>
                    Pay
                </span>
                <span className="text-blue-500 font-bold text-xl">TM</span>
            </Link>
            <div className="flex items-center space-x-4">
                <div className="hidden md:block">Hello</div> {/* Hide on smaller screens */}
                <div className="rounded-full bg-slate-400 text-center h-8 w-8 flex items-center justify-center text-sm">U</div>
            </div>
        </div>
    );
}
