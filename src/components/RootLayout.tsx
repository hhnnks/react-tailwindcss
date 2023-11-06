import React from 'react'

function RootLayout({ children, ...rest }: { children: React.ReactNode }) {
    return (
        <div className="w-[100%] h-[100%]" {...rest}>
            {children}
        </div>
    )
}

export default RootLayout
