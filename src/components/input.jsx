export function Input({ label, id, data, handleData }) {
  return (
    <>
      <label htmlFor={id}> {label} </label>
      <input
        id={id}
        type="text"
        onChange={(event) => handleData({ ...data, [id]: event.target.value })}
        required
      ></input>
    </>
  );
}

export function School({ n, data, handleData }) {
  return (
    <div>
      <Input
        label="School name: "
        id={"school" + n}
        data={data}
        handleData={handleData}
      />
      <Input
        label="Title of study: "
        id={"study" + n}
        data={data}
        handleData={handleData}
      />
      <FromToInput n={n} data={data} handleData={handleData} />
    </div>
  );
}

function FromToInput({ n, data, handleData }) {
  const fromId = "from" + n;
  const toId = "to" + n;

  return (
    <>
      <label htmlFor={fromId}> From </label>
      <input
        id={fromId}
        type="number"
        min={1900}
        max={2100}
        onChange={(event) =>
          handleData({ ...data, [fromId]: event.target.value })
        }
        required
      ></input>
      <label htmlFor={toId}> to </label>
      <input
        id={toId}
        type="number"
        min={1900}
        max={2100}
        onChange={(event) =>
          handleData({ ...data, [toId]: event.target.value })
        }
        required
      ></input>
    </>
  );
}

export function Job({ n, data, handleData }) {
  return (
    <div>
      <Input
        label="Company name: "
        id={"company" + n}
        data={data}
        handleData={handleData}
      />
      <Input
        label="Position title: "
        id={"position" + n}
        data={data}
        handleData={handleData}
      />
      <Input
        label="Main responsibilities: "
        id={"responsibilities" + n}
        data={data}
        handleData={handleData}
      />
      <FromUntilInput n={n} data={data} handleData={handleData} />
    </div>
  );
}

function FromUntilInput({ n, data, handleData }) {
  const jobFromId = "jobFrom" + n;
  const untilId = "until" + n;

  return (
    <>
      <label htmlFor={jobFromId}> From </label>
      <input
        id={jobFromId}
        type="number"
        min={1900}
        max={2100}
        onChange={(event) =>
          handleData({ ...data, [jobFromId]: event.target.value })
        }
        required
      ></input>
      <label htmlFor={untilId}> until </label>
      <input
        id={untilId}
        type="number"
        min={1900}
        max={2100}
        onChange={(event) =>
          handleData({ ...data, [untilId]: event.target.value })
        }
        required
      ></input>
    </>
  );
}
