"use client"

import Input from './Input'
import Section from './Section'

export default function FreelanceForm() {
    return (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
            <Section title="Client">
                <Input label="Company / Client name" />
            </Section>

            <Section title="Project">
                <Input label="Project type" />
                <Input label="Scope description" placeholder="What are you building?" />
                <Input label="Timeline" />
                <Input label="Budget range" />
            </Section>

            <Section title="Call">
                <Input label="Intro call date & time" type="datetime-local" />
                <Input label="Timezone" />
            </Section>

            <Section title="Contact">
                <Input label="Email" type="email" />
            </Section>
        </div>
    )
}
