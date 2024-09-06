import Link from 'next/link';
import React from 'react';
import { SiGithub, SiLinkedin, SiX } from 'react-icons/si';

const Navbar = () => {
    const socials = [
        {
            link: "https://linkedin.com/in/fidelis-tuwei",
            label: "Linkedin",
            icon: SiLinkedin
        },
        {
            link: "https://github.com/FIDELIS-TUWEI",
            label: "Github",
            icon: SiGithub,
        },
        {
            link: "https://x.com/Fidelis_Tuwei",
            label: "X",
            icon: SiX
        }
    ];

    return (
        <nav className='py-10 flex justify-between items-center'>
            <h1 className='text2xl font-bold underline underline-offset-8 decoration-green-500 -rotate-2'>Tuwei 👩🏻‍💻</h1>

            <div className='flex items-center gap-5'>
                {socials.map((social) => {
                    const Icon = social.icon

                    return <Link href={social.link} key={social.label} aria-label={social.label}>
                        <Icon className='w-5 h-5 hover:scale-125 transition-all' />
                    </Link>
                })}
            </div>
        </nav>
    )
}

export default Navbar;