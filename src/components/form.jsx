import { useState } from 'react';

import { Input, School, Job } from "./input.jsx";



export function Form(){
    const [numSchools, setNumSchools] = useState(1);
    const [numJobs, setNumJobs] = useState(0);
    const [isSubmitted, setIsSubmitted] = useState(false);

    const schools = [];
    for(let i = 0; i < numSchools; i++){
        schools.push(<School key={i} n={i} />);
    }

    const jobs = [];
    for(let i = 0; i < numJobs; i++){
        jobs.push(<Job key={i} n={i} />);
    }
    if(!isSubmitted){
        return <form onSubmit={(event) => {handleSubmit(event, setIsSubmitted)}}>
            <section className="general">
                <h1>General information</h1>
                <Input label="Fullname: " id="name" />
                <Input label="Email: " id="email" />
                <Input label="Phone number: " id="phone" />
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
            <button type='submit'>Submit</button>
        </form>
    }
    return <>
        <h1>Test CV</h1>
    </>
}

function handleSubmit(event, handleState){
    event.preventDefault();
    handleState(true);
}