'use client'
import MainPageInfoCarousel from '../components/MainPageInfoCarousel'
import Whatson from '@/components/Whatson'

import Reg from '@/components/Registrationform'

import PasswordRecoveryForm from '@/components/PasswordRecovery'

export default function Home() {
  return (
    <div className="overflow-x-hidden">
      <Whatson />
      <MainPageInfoCarousel />
      <Reg />
      <PasswordRecoveryForm />
    </div>
  )
}
