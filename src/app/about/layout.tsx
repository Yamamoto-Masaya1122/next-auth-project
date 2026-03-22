import React from 'react'

export default function Aboutlayout({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>
) {
  return (
    <div className="bg-gray-200 h-screen">
        {children}
    </div>
  )
}
