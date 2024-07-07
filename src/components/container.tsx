import React from 'react'

export default function Container({children}: {
  children: React.ReactNode
}) {
  return (
    <div className="max-w-[800px] mx-auto min-h-screen flex flex-col border-l border-r border-[#F2F2F2]">
      {children}
    </div>
  )
}
