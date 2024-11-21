'use client'

import { useSession } from 'next-auth/react'
import { redirect } from 'next/navigation'
import React from 'react'

const Home = () => {
  const { data: session } = useSession()
  if (!session) {
    return redirect('/')
  }

  return (
    <h1>Olá, colega: {session.user?.name}</h1>
  )
}

export default Home