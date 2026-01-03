"use client"

import React from 'react'

function Modal({ open, onClose, children }) {
    if (!open) return null

    return (
        <div
            style={{
                position: 'fixed',
                inset: 0,
                backgroundColor: 'rgba(0,0,0,0.45)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                zIndex: 1000,
            }}
            onClick={onClose}
        >
            <div
                onClick={(e) => e.stopPropagation()}
                style={{
                    width: '100%',
                    maxWidth: '520px',
                    backgroundColor: '#ffffff',
                    borderRadius: '12px',
                    padding: '24px',
                    boxShadow: '0 20px 40px rgba(0,0,0,0.15)',
                }}
            >
                {children}
            </div>
        </div>
    )
}

export default Modal
