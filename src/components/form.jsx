import { useState } from 'react';

import { Input } from "./input.jsx";
import { School } from "./school.jsx"


export function Form(){
    const [numSchools, setNumSchools] = useState(1);

    const schools = [];
    for(let i = 0; i < numSchools; i++){
        schools.push(<School key={i} n={i} />);
    }
    
    return <form>
        <section className="general">
            <Input label="Fullname: " id="name" />
            <Input label="Email: " id="email" />
            <Input label="Phone number: " id="phone" />
        </section>
        <section className="education">
            {schools}
        </section>
        <section className="experience">

        </section>
    </form>
}