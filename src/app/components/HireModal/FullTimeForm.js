"use client"

import Input from "./Input"
import Section from "./Section"


export default function FullTimeForm() {
    return (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
            <Section title="Company & Role">
                <Input label="Company name" placeholder="e.g. Kakao" />
                <Input label="Role title" placeholder="Frontend Engineer" />
            </Section>

            <Section title="Work details">
                <Input label="Work type" placeholder="Remote / Hybrid / On-site" />
                <Input label="Location" placeholder="City, Country" />
            </Section>

            <Section title="Interview">
                <Input label="Interview date & time" type="datetime-local" />
            </Section>

            <Section title="Contact">
                <Input label="Email" type="email" />
                <Input label="Phone number" />
            </Section>
        </div>
    )
}
