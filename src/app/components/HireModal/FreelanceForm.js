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

    const [fulltimeData, setFulltimeData] = useState({
        companyName: "",
        roleTitle: "",
        workType: "",
        location: "",
        interviewDate: "",
        email: "",
        phoneNumber: "",
    })

    const [freelanceData, setFreelanceData] = useState({
        companyClientName: "",
        projectType: "",
        scopeProjection: "",
        timeline: "",
        budgetRange: "",
        dateAndTime: "",
        timezone: "",
        email: "",
    })

    function handleSubmit(e) {
        e.preventDefault()
        setIsSubmitting(true)

        const payload = {
            intent,
            data: intent === 'fulltime' ? fulltimeData : freelanceData,
        }

        console.log('HIRE PAYLOAD:', payload)

        // TODO: replace with real API
        setTimeout(() => {
            setIsSubmitting(false)
            setSubmitted(true)
        }, 1200)
    }


    function isFulltimeValid(data) {
        return (
            data.companyName &&
            data.roleTitle &&
            data.workType &&
            data.location &&
            data.interviewDate &&
            data.email &&
            data.phoneNumber
        )
    }

    function isFreelanceValid(data) {
        return (
            data.companyClientName &&
            data.projectType &&
            data.scopeProjection &&
            data.timeline &&
            data.budgetRange &&
            data.dateAndTime &&
            data.timezone &&
            data.email
        )
    }

    const isFormValid =
        intent === 'fulltime'
            ? isFulltimeValid(fulltimeData)
            : isFreelanceValid(freelanceData)



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
                        ?   <FullTimeForm 
                                value={fulltimeData}
                                onChange={setFulltimeData}
                            />
                        :   <FreelanceForm 
                                value={freelanceData}
                                onChange={setFreelanceData}
                            />}

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
                            disabled={isSubmitting || !isFormValid}
                            style={{
                                ...primaryButton,
                                opacity: isSubmitting || !isFormValid ? 0.5 : 1,
                                cursor: isSubmitting || !isFormValid ? 'not-allowed' : 'pointer',
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
