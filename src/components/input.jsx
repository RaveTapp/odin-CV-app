export function Input({ label, id }) {
  return (
    <>
      <label htmlFor={id}> {label} </label>
      <input id={id} type="text" required></input>
    </>
  );
}

export function School({ n }) {
  return (
    <div>
      <Input label="School name: " id={"school" + n}></Input>
      <Input label="Title of study: " id={"study" + n}></Input>
      <FromToInput n={n} />
    </div>
  );
}

function FromToInput({ n }) {
  return (
    <>
      <label htmlFor={"from" + n}> From </label>
      <input
        id={"from" + n}
        type="number"
        min={1900}
        max={2100}
        required
      ></input>
      <label htmlFor={"to" + n}> to </label>
      <input id={"to" + n} type="number" min={1900} max={2100} required></input>
    </>
  );
}

export function Job({ n }) {
  return (
    <div>
      <Input label="Company name: " id={"company" + n}></Input>
      <Input label="Position title: " id={"position" + n}></Input>
      <Input
        label="Main responsibilities: "
        id={"responsibilities" + n}
      ></Input>
      <FromUntilInput n={n} />
    </div>
  );
}

function FromUntilInput({ n }) {
  return (
    <>
      <label htmlFor={"jobFrom" + n}> From </label>
      <input
        id={"jobFrom" + n}
        type="number"
        min={1900}
        max={2100}
        required
      ></input>
      <label htmlFor={"until" + n}> until </label>
      <input
        id={"until" + n}
        type="number"
        min={1900}
        max={2100}
        required
      ></input>
    </>
  );
}
