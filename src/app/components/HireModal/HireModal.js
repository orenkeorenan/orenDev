"use client"

import React, { useState } from 'react'
import Modal from '../Modal/Modal'
import IntentSelector from './IntentSelector'
import FullTimeForm from './FullTimeForm'
import FreelanceForm from './FreelanceForm'
import { useLanguage } from '@/app/context/LanguageContext'
import { LANGUAGES } from '@/app/i18n'

export default function HireMeModal({ open, onClose }) {
    const [intent, setIntent] = useState('fulltime')
    const [isSubmitting, setIsSubmitting] = useState(false)
    const [submitted, setSubmitted] = useState(false)

    const { language } = useLanguage()
    const t = LANGUAGES[language].hireModal
    const actions = LANGUAGES[language].actions

    function handleSubmit(e) {
        e.preventDefault()
        setIsSubmitting(true)

        // TODO: replace with real API
        setTimeout(() => {
            setIsSubmitting(false)
            setSubmitted(true)
        }, 1200)
    }

    function handleClose() {
        setSubmitted(false)
        setIsSubmitting(false)
        setIntent('fulltime')
        onClose()
    }

    const actionsRow = {
        display: 'flex',
        justifyContent: 'flex-end',
        gap: '12px',
        marginTop: '32px',
    }

    const primaryButton = {
        padding: '10px 18px',
        borderRadius: '999px',
        border: 'none',
        backgroundColor: '#111827',
        color: '#ffffff',
        fontSize: '14px',
        fontWeight: 500,
        cursor: 'pointer',
    }

    const secondaryButton = {
        padding: '10px 16px',
        borderRadius: '999px',
        border: '1px solid #d1d5db',
        backgroundColor: '#ffffff',
        fontSize: '14px',
        fontWeight: 500,
        cursor: 'pointer',
    }


    return (
        <Modal open={open} onClose={handleClose}>
            {submitted ? (
                <div style={{ textAlign: 'center', padding: '32px 0' }}>
                    <h3 style={{ fontSize: '20px', fontWeight: 700 }}>
                        {t.successTitle}
                    </h3>
                    <p style={{ color: '#6b7280', marginTop: '8px' }}>
                        {t.successMessage}
                    </p>

                    <button
                        onClick={handleClose}
                        style={primaryButton}
                    >
                        {actions.cancel}
                    </button>
                </div>
            ) : (
                <form onSubmit={handleSubmit}>
                    <h2 style={{ fontSize: '22px', fontWeight: 700 }}>
                        {t.title}
                    </h2>

                    <p style={{ fontSize: '14px', color: '#6b7280', marginBottom: '24px' }}>
                        {t.subtitle}
                    </p>

                    <IntentSelector
                        intent={intent}
                        onChange={setIntent}
                        t={t.intent}
                    />

                    {intent === 'fulltime'
                        ? <FullTimeForm lang={language} />
                        : <FreelanceForm lang={language} />}

                    <div style={actionsRow}>
                        <button
                            type="button"
                            onClick={handleClose}
                            style={secondaryButton}
                        >
                            {actions.cancel}
                        </button>

                        <button
                            type="submit"
                            disabled={isSubmitting}
                            style={{
                                ...primaryButton,
                                opacity: isSubmitting ? 0.7 : 1,
                                cursor: isSubmitting ? 'not-allowed' : 'pointer',
                            }}
                        >
                            {isSubmitting ? actions.sending : actions.submit}
                        </button>
                    </div>
                </form>
            )}
        </Modal>
    )
}
