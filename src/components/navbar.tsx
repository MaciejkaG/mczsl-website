"use client";
import { useEffect, useState } from 'react';
import styles from './navbar.module.css';

export default function Navbar() {
    const [scrollDirection, setScrollDirection] = useState('none');

    useEffect(() => {
        let lastScrollTop = 0;

        const handleScroll = () => {
            const currentScroll = window.pageYOffset || document.documentElement.scrollTop;

            if (currentScroll > lastScrollTop) {
                setScrollDirection('down');
            } else {
                setScrollDirection('up');
            }

            lastScrollTop = currentScroll;
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <nav className={`fixed top-0 left-0 h-14 w-full backdrop-blur-md bg-opacity-20 flex items-center gap-10 px-10 box-border text-lg font-lexend-deca font-light z-50 transition-transform ease-out duration-500 motion-reduce:transition-none ${scrollDirection === 'down' ? styles.navHidden : ''}`}>
            <span>Strona główna</span>
            <span>Regulamin</span>
        </nav>
    );
}