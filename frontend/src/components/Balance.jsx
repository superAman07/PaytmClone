export const Balance = ({ value }) => {
    return (
        <div className="w-full p-4 bg-gray-700 rounded-lg border border-amber-400 text-center text-slate-400">
            Your balance is <span className="font-semibold text-white">{value}$</span>
        </div>
    );
}
