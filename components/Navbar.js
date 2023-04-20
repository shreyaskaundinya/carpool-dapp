// import PESLogo from '/assets/pes.svg';
// import HallothonLogo from '/assets/hallothon_logo.svg';
// import Hamburger from '../assets/hamburger.svg';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
// import gsap from 'gsap';
function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const toggleMenu = () => {
        setIsOpen((prev) => !prev);
    };

    const paths = [
        { path: '/', name: 'HOME' },
        { path: '/register', name: 'REGISTER CAR' },
        { path: '/#aboutus', name: 'ABOUT US' },
        { path: '/#faq', name: 'FAQ' },
        { path: '/#contact', name: 'CONTACT' },
    ];

    return (
        <div className='z-[1399] sticky top-0'>
            <div className='navbar sm:flex'>
                <div className='links'>
                    {paths.map((p) => {
                        return p.path.charAt(0) === '/' ? (
                            <Link href={p.path}>{p.name}</Link>
                        ) : (
                            <a href={p.path}>{p.name}</a>
                        );
                    })}
                </div>
            </div>
            <div className='navbar navbar-mobile sm:hidden relative items-center'>
                <div className='z-50'>
                    <Image
                        src='/assets/hamburger.svg'
                        alt='Menu'
                        height={32}
                        width={32}
                        onClick={toggleMenu}
                    />
                </div>
                
                
            </div>
            <div>
                {isOpen && (
                    <div className='links flex-col w-full text-center z-50 bg-black gap-4 py-4'>
                        {paths.map((p) => {
                            return p.path.charAt(0) === '/' ? (
                                <Link href={p.path}>{p.name}</Link>
                            ) : (
                                <a href={p.path}>{p.name}</a>
                            );
                        })}
                    </div>
                )}
            </div>
        </div>
    );
}

export default Navbar;