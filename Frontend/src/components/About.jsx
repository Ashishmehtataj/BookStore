import React from 'react'

function About() {
    return (
        <div>
            <div className='max-w-screen container mx-auto md:px-20 px-4'>
                <div className='mt-28 items-center justify-center text-center'>
                    <h1 className='text-2xl font-bold'>About our Book Store</h1>
                    <p className='mt-4'>
                        Welcome to <strong>BookNest</strong> – your one-stop destination for books that inspire, educate, and entertain.
                        Humara mission hai har reader tak unki pasand ki kitab pahunchana, chahe wo novels ho, academic guides ho, ya self‑help books.
                    </p>
                    <p>
                        We believe that <em>every book opens a new world</em>. Isi liye hum apne collection ko carefully curate karte hain, taaki har age group aur interest ke liye kuch na kuch ho.
                    </p>
                    <p>
                        Our bookstore is not just about selling books – it’s about building a community of readers.
                        Join us in celebrating the joy of reading and discover stories that stay with you forever.
                    </p>
                </div>
                <div className='mt-12 items-center justify-center text-center'>
                    <h1 className='text-2xl font-bold'>Our Story</h1>
                    <p className='mt-4'>
                        Every great bookstore begins with a love for reading. Humne apni journey ek simple idea se start ki –
                        <strong>books should be accessible to everyone</strong>.
                        Chahe tum ek student ho, ek professional, ya ek casual reader – yahan tumhe apni pasand ki kitab zaroor milegi.
                    </p>
                    <p>
                        From timeless classics to the latest bestsellers, hum apna collection regularly update karte hain taaki
                        har reader ke liye kuch naya ho.
                        Our goal is to make reading not just a habit, but a lifestyle.
                    </p>
                </div>
                <div className='mt-12 items-center justify-center text-center'>
                    <h1 className='text-2xl font-bold'>Why Choose Us</h1>
                    <ul className='mt-4'>
                        <li>📖 Wide range of books – novels, academics, self-help, and more.</li>
                        <li>💡 Curated recommendations to help you pick the right read.</li>
                        <li>🚚 Easy browsing & fast delivery options.</li>
                        <li>🤝 A community-driven space for book lovers.</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default About
