// components/HireMeModal/HireMeModal.js
"use client"

import React, { useState } from 'react'
import Modal from '../Modal/Modal'
import IntentSelector from './IntentSelector'
import FullTimeForm from './FullTimeForm'
import FreelanceForm from './FreelanceForm'

export default function HireMeModal({ open, onClose }) {
    const [intent, setIntent] = useState('fulltime')

    return (
        <Modal open={open} onClose={onClose}>
            <h2 style={{ fontSize: '22px', fontWeight: 700 }}>
                Let’s work together
            </h2>

            <p style={{ fontSize: '14px', color: '#6b7280', marginBottom: '24px' }}>
                Tell me a bit about your opportunity and I’ll get back to you.
            </p>

            <IntentSelector intent={intent} onChange={setIntent} />

            {intent === 'fulltime'
                ? <FullTimeForm />
                : <FreelanceForm />}
        </Modal>
    )
}
