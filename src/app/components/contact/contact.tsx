'use client'

import styles from './contact.module.scss'
import React, { useState } from 'react'

export function Contact() {
    const [formData, setFormData] = useState({ name: '', email: '', topic: '', message: '' })

    const handleChange = ( e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target
        setFormData((prevData) => ({
            ...prevData,
            [name]: value
        }))
    }

    const handleSubmit = async ( e: React.FormEvent ) => {
        e.preventDefault()

        try {
            const res = await fetch('/api/send-email', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData),
            })

            if( res.ok ) {
                alert('Wiadomość wysłana!');
            } else {
                alert('Błąd wysyłania wiadomości');
            }

        } catch (error) {
            console.error('Error:', error);
            alert('Błąd wysyłania wiadomości');
        }
    }

    return (
        <div className={styles.page}>
            <h3 className={styles.subtitle}>Formularz kontaktowy</h3>
            <form className={styles.form} onSubmit={handleSubmit}>
                <input name="name" type="text" placeholder="Imię i nazwisko" onChange={handleChange} required />
                <input name="email" type="email" placeholder="Adres email" onChange={handleChange} required />
                <input name="topic" type="text" placeholder="Temat" onChange={handleChange} required />
                <textarea name="message" placeholder="Wiadomość" onChange={handleChange} required></textarea>
                <button type="submit">Wyślij</button>
            </form>
        </div>
    )
}
