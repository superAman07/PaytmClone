function Heading({ label, className }) {
    return (
        <h1 className={`text-2xl md:text-3xl lg:text-4xl font-extrabold text-center ${className}`}>
            {label}
        </h1>
    );
}

export default Heading;
