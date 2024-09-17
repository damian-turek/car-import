import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

export const Hero: React.FC = () => (
    <>
        <div>
            <h2>Znajdź ze mną wymarzone auto</h2>
            <p>Zajmuję się sprowadzaniem samochodów z Niemiec od 15 lat. Zaufało mi ponad 120 klientów.</p>
            <Link href="#">Skontaktuj się ze mną</Link>
        </div>
        <Image
            src=""
            alt="Hero"
            fill={true}
        />
    </>
)