import React from 'react'

export default function Layout({children}) {
    return (
        <div>
            {/* <h1>To do List</h1> */}
            <main>{children}</main>
        </div>
    )
}
