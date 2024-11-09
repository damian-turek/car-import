"use client"
// components/ContactForm.js

import React, { useState } from 'react';
export function Contact() {
    const [formData, setFormData] = useState({ name: '', email: '', message: '' });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({ ...prevData, [name]: value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const res = await fetch('/api/send-email', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(formData),
        });
        if (res.ok) {
            alert('Wiadomość wysłana!');
        } else {
            alert('Błąd wysyłania wiadomości');
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <input name="name" type="text" placeholder="Imię i nazwisko" onChange={handleChange} required />
            <input name="email" type="email" placeholder="Adres email" onChange={handleChange} required />
            <textarea name="message" placeholder="Wiadomość" onChange={handleChange} required></textarea>
            <button type="submit">Wyślij</button>
        </form>
    );
}
