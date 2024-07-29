export function Input({label, id}){
    
    return <>
        <label htmlFor={id} > {label} </label>
        <input id={id} type="text" required ></input>
    </>
}