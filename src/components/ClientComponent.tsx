'use client';

import React from 'react'
import { useState } from 'react';

export default function ClientComponent() {
    const [count, setCount] = useState(0);
    console.log('Client');
    return (
        <>
            <div>ClientComponent</div>
            <button onClick={() => setCount(count + 1)}>Count: {count}</button>
        </>
    )
}
