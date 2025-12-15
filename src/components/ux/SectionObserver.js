import { useEffect, useRef } from 'react';

export default function SectionObserver(entries) {
    useEffect(() => {
        const observer = new IntersectionObserver((entries, observer) => {
            const entry = entries[0];
            console.log('entry', entry);
            console.log('entry.isIntersecting', entry.isIntersecting);
        });
    }, []);
}