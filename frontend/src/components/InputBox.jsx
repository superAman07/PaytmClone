
function InputBox({placeholder, className, onChange}){
    return (
        <div className={className}>  
            <input onChange={onChange} className={className} type="text" placeholder={placeholder}/>
        </div>
    );
}
export default InputBox;