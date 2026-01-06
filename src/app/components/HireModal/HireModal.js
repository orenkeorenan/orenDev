"use client"

import { useState } from 'react'
import Modal from '../Modal/Modal'
import IntentSelector from './IntentSelector'
import FullTimeForm from './FullTimeForm'
import FreelanceForm from './FreelanceForm'
import { useLanguage } from '@/app/context/LanguageContext'
import { LANGUAGES } from '@/app/i18n'

// ✅ initial states
const INITIAL_FULLTIME = {
  companyName: "",
  roleTitle: "",
  workType: "",
  location: "",
  interviewDate: "",
  email: "",
  phoneNumber: "",
}

const INITIAL_FREELANCE = {
  companyClientName: "",
  projectType: "",
  scopeProjection: "",
  timeline: "",
  budgetRange: "",
  dateAndTime: "",
  timezone: "",
  email: "",
}

export default function HireMeModal({ open, onClose }) {
  const [intent, setIntent] = useState('fulltime')
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)

  const [fulltimeData, setFulltimeData] = useState(INITIAL_FULLTIME)
  const [freelanceData, setFreelanceData] = useState(INITIAL_FREELANCE)

  const { language } = useLanguage()
  const t = LANGUAGES[language].hireModal
  const actions = LANGUAGES[language].actions

  function handleClose() {
    setSubmitted(false)
    setIsSubmitting(false)
    setIntent('fulltime')

    // 🔒 clear data
    setFulltimeData(INITIAL_FULLTIME)
    setFreelanceData(INITIAL_FREELANCE)

    onClose()
  }

  function handleSubmit(e) {
    e.preventDefault()
    setIsSubmitting(true)

    const payload = {
      intent,
      language,
      data: intent === 'fulltime' ? fulltimeData : freelanceData,
    }

    fetch('/api/hire', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
    })
      .then(res => {
        if (!res.ok) throw new Error('Request failed')

        setSubmitted(true)

        // 🔒 clear data immediately after success
        setFulltimeData(INITIAL_FULLTIME)
        setFreelanceData(INITIAL_FREELANCE)
      })
      .catch(() => alert('Something went wrong. Please try again.'))
      .finally(() => setIsSubmitting(false))
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
        <div
          style={{
            textAlign: 'center',
            padding: '32px 0',
            display: "flex",
            flexDirection: "column",
            gap: "1rem",
          }}
        >
          <h3 style={{ fontSize: '20px', fontWeight: 700 }}>
            {t.successTitle}
          </h3>
          <p style={{ color: '#6b7280', marginTop: '8px' }}>
            {t.successMessage}
          </p>

          <button onClick={handleClose} style={{
            padding: '10px 18px',
            borderRadius: '999px',
            border: 'none',
            backgroundColor: '#111827',
            color: '#ffffff',
            fontSize: '14px',
            fontWeight: 500,
            cursor: 'pointer',
          }}>
            {actions.close}
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

          {intent === 'fulltime' ? (
            <FullTimeForm value={fulltimeData} onChange={setFulltimeData} />
          ) : (
            <FreelanceForm value={freelanceData} onChange={setFreelanceData} />
          )}

          <div style={{
            display: 'flex',
            justifyContent: 'flex-end',
            gap: '12px',
            marginTop: '32px',
          }}>
            <button
              type="button"
              onClick={handleClose}
              style={{
                padding: '10px 16px',
                borderRadius: '999px',
                border: '1px solid #d1d5db',
                backgroundColor: '#ffffff',
                fontSize: '14px',
                fontWeight: 500,
                cursor: 'pointer',
              }}
            >
              {actions.cancel}
            </button>

            <button
              type="submit"
              disabled={isSubmitting || !isFormValid}
              style={{
                padding: '10px 18px',
                borderRadius: '999px',
                border: 'none',
                backgroundColor: '#111827',
                color: '#ffffff',
                fontSize: '14px',
                fontWeight: 500,
                cursor: isSubmitting || !isFormValid ? 'not-allowed' : 'pointer',
                opacity: isSubmitting || !isFormValid ? 0.5 : 1,
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
