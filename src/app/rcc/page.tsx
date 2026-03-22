'use client';

import React from 'react'
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

export default function ClientComponent() {
    const [count, setCount] = useState(0);
    const router = useRouter();
    console.log('Client');
    return (
        <>
            <div>ClientComponent</div>
            <button onClick={() => setCount(count + 1)}>Count: {count}</button>
            <Link href="/about">About</Link>
            <button onClick={() => router.push('/about')}>About</button>
        </>
    )
}
