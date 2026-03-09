
import { useSearchParams } from 'next/navigation'
import React from 'react'

const Navbar = () => {

  const searchParams =  useSearchParams();
  const todosFilter = searchParams.get("todos")
  console.log("navbar " + todosFilter)

  return (
    <nav>
        <link href="/"> All </link>
        <link href="/?todos=active"> Active </link>
        <link href="/?todos=completed"> Completed </link>
    </nav>
  )
}

export default Navbar
