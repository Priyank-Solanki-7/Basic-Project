// eslint-disable-next-line react/prop-types
let Display=({displayValue})=>{
    return(
        <>
        <input type="text" className={`w-full bg-gray-200 h-10`} readOnly value={displayValue}/>
        </>
    );
};

export default Display;