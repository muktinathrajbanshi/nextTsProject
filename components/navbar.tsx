import React from 'react'

const navbar = () => {
  return (
    <nav>
        <link href="/"> All </link>
        <link href="/?todos=active"> Active </link>
        <link href="/?todos=completed"> Completed </link>
    </nav>
  )
}

export default navbar
