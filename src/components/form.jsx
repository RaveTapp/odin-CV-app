import { useState } from "react";

import { Input, School, Job } from "./input.jsx";

export function Form() {
  const [numSchools, setNumSchools] = useState(1);
  const [numJobs, setNumJobs] = useState(0);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [dataObj, setDataObj] = useState("");

  const schools = [];
  for (let i = 0; i < numSchools; i++) {
    schools.push(
      <School key={i} n={i} data={dataObj} handleData={setDataObj} />
    );
  }

  const jobs = [];
  for (let i = 0; i < numJobs; i++) {
    jobs.push(<Job key={i} n={i} data={dataObj} handleData={setDataObj} />);
  }
  if (!isSubmitted) {
    return (
      <form
        onSubmit={(event) => {
          handleSubmit(event, setIsSubmitted);
        }}
      >
        <section className="general">
          <h1>General information</h1>
          <Input
            label="Fullname: "
            id="name"
            data={dataObj}
            handleData={setDataObj}
          />
          <Input
            label="Email: "
            id="email"
            data={dataObj}
            handleData={setDataObj}
          />
          <Input
            label="Phone number: "
            id="phone"
            data={dataObj}
            handleData={setDataObj}
          />
        </section>
        <section className="education">
          <h1>Education</h1>
          {schools}
          <button onClick={() => setNumSchools(numSchools + 1)}>+</button>
        </section>
        <section className="experience">
          <h1>Job experience</h1>
          {jobs}
          <button onClick={() => setNumJobs(numJobs + 1)}>+</button>
        </section>
        <button type="submit">Submit</button>
      </form>
    );
  }

  const schoolData = [];
  for (let i = 0; i < numSchools; i++) {
    schoolData.push(
      <p key={"schoolData" + i}>
        {dataObj["study" + i]} at {dataObj["school" + i]} from{" "}
        {dataObj["from" + i]} to {dataObj["to" + i]}
      </p>
    );
  }

  const jobData = [];
  for (let i = 0; i < numJobs; i++) {
    jobData.push(
      <p key={"jobData" + i}>
        Worked at {dataObj["company" + i]} as {dataObj["position" + i]} doing{" "}
        {dataObj["responsibilities" + i]} from {dataObj["jobFrom" + i]} until{" "}
        {dataObj["until" + i]}
      </p>
    );
  }

  return (
    <>
      <h1>{dataObj.name}'s CV</h1>
      <h2>Educational experience</h2>
      {schoolData}
      <h2>Job experience</h2>
      {jobData}
      <h3>Contact information</h3>
      <p>
        Email {dataObj.name} at {dataObj.email} or call {dataObj.phone}
      </p>
      {console.log(dataObj)}
    </>
  );
}

function handleSubmit(event, handleState) {
  event.preventDefault();
  handleState(true);
}
