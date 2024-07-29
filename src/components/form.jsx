import { Input } from "./input.jsx";

export function Form(){
    return <form>
        <section className="general">
            <Input label="Fullname: " id="name" />
            <Input label="Email: " id="email" />
            <Input label="Phone number: " id="phone" />
        </section>
        <section className="education">
            
        </section>
        <section className="experience">

        </section>
    </form>
}