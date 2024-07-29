import { Input } from "./input.jsx";

export function Job({n}){
    return <div>
        <Input label="Company name: " id={"company" + n} ></Input>
        <Input label="Position title: " id={"position" + n} ></Input>
        <Input label="Main responsibilities: " id={"responsibilities" + n} ></Input>
        <FromUntilInput n={n} />
    </div>
}

function FromUntilInput({n}){
    return <>
        <label htmlFor={"jobFrom" + n} > From </label>
        <input id={"jobFrom" + n} type="number" min={1900} max={2100} required ></input>
        <label htmlFor={"until" + n} > until </label>
        <input id={"until" + n} type="number" min={1900} max={2100} required ></input>

    </>
}