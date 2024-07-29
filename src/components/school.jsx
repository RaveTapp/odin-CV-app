import { Input } from "./input.jsx";

export function School({n}){
    return <div>
        <Input label="School name: " id={"school" + n} ></Input>
        <Input label="Title of study: " id={"study" + n} ></Input>
        <FromToInput n={n} />
    </div>
}

function FromToInput({n}){
    return <>
        <label htmlFor={"from" + n} > From </label>
        <input id={"from" + n} type="number" min={1900} max={2100} required ></input>
        <label htmlFor={"to" + n} > to </label>
        <input id={"to" + n} type="number" min={1900} max={2100} required ></input>

    </>
}