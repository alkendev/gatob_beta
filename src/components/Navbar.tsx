'use client'
import React, { useState } from 'react'
import Link from 'next/link'
import { CiSearch } from 'react-icons/ci'
import { CiShoppingCart } from 'react-icons/ci'
import { CgProfile } from 'react-icons/cg'
import Image from 'next/image'
import abay from '../app/assets/abay.svg'

interface MenuItem {
  label: string
  links: { title: string; href: string }[]
}

const menuItems = [
  {
    label: 'Билеты и мероприятия',
    links: [
      { title: 'Что посмотреть', href: 'what-to-watch' },
      { title: 'Туры', href: '/tours' },
      { title: 'Возврат и возмещение', href: 'refund' },
      { title: 'Акции', href: 'promotions' },
      { title: 'Подарочные сертификаты', href: 'gift-certificates' },
    ],
  },
  {
    label: 'Посещение',
    links: [
      { title: 'Зрителям', href: 'for-audience' },
      { title: 'Кафе', href: 'cafe' },
      { title: 'Посещение мероприятий', href: 'event-visits' },
      { title: 'Доступность', href: 'accessibility' },
    ],
  },
  { label: 'Магазин', links: [] },
  {
    label: 'Новости',
    links: [
      { title: 'Последние новости', href: 'latest-news' },
      { title: 'Архив', href: 'news-archive' },
      { title: 'Пресса и общественность', href: 'press-and-publicity' },
    ],
  },
  {
    label: 'Обучение',
    links: [
      { title: 'Школы', href: 'schools' },
      { title: 'Программы обучения', href: 'training-programs' },
    ],
  },
  {
    label: '',
    links: [
      { title: 'Пожертвования', href: 'donations' },
      { title: 'Оформить подписку', href: 'subscribe' },
      { title: 'Партнерство и спонсоры', href: 'partnerships-and-sponsors' },
    ],
  },
  {
    label: 'О нас',
    links: [
      { title: 'Театр оперы и балета', href: 'about' },
      { title: 'Опера', href: 'opera' },
      { title: 'Балет', href: 'ballet' },
      { title: 'Оркестр', href: 'orchestra' },
      { title: 'Коллектив', href: 'team' },
      { title: 'Наши обязательства', href: 'our-commitments' },
      { title: 'Карьера', href: 'career' },
    ],
  },
]

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [selectedLabel, setSelectedLabel] = useState<string | null>(null)

  const toggleMenu = () => {
    setMenuOpen(!menuOpen)
  }

  const toggleLabel = (label: string) => {
    setSelectedLabel(selectedLabel === label ? null : label)
  }

  const handleMouseLeave = () => {
    setSelectedLabel(null)
  }

  return (
    <nav className="flex justify-between container mx-auto items-center h-24 lg:h-48 px-8">
      <div className="flex flex-col justify-center">
        <Link href="/">
          <Image
            src={abay}
            alt="Логотип КазНТОБ им. Абая"
            width={500}
          />
          КазНТОБ им. Абая
        </Link>
      </div>
      <div className="hidden lg:flex flex-grow">
        {menuItems.map((menuItem, index) => (
          <div
            key={index}
            className="mr-4 relative"
            onMouseEnter={() => toggleLabel(menuItem.label)}
            onMouseLeave={handleMouseLeave}
          >
            <span className={`cursor-pointer`}>{menuItem.label}</span>
            {selectedLabel === menuItem.label && (
              <ul className="absolute bg-white rounded-lg shadow-md">
                {menuItem.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <Link href={link.href}>
                      <span className="block py-2 px-2 text-nowrap hover:text-2xl hover:text-red-900">
                        {link.title}
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            )}
          </div>
        ))}
      </div>
      <div className="flex gap-4 items-center">
        <div className="flex justify-between items-center gap-2 lg:gap-4">
          <CiSearch className="text-3xl hover:text-red-900 cursor-pointer" />

          <Link href="/cart">
            <CiShoppingCart className="text-3xl hover:text-red-900" />
          </Link>
          <Link href="/registration">
            <div className="flex items-center gap-1 hover:text-red-900">
              <CgProfile className="" />
              <span>Войти</span>
            </div>
          </Link>
        </div>
        <div
          className="lg:hidden"
          onClick={toggleMenu}
        >
          Menu
        </div>
        {menuOpen && (
          <div className="absolute left-0 top-0 mt-24 lg:mt-32 z-50 bg-white w-full h-full px-4">
            <ul className="p-4">
              {menuItems.map((menuItem, index) => (
                <li
                  key={index}
                  className="py-2"
                >
                  <span onClick={() => toggleLabel(menuItem.label)}>{menuItem.label}</span>
                  {selectedLabel === menuItem.label && (
                    <ul>
                      {menuItem.links.map((link, linkIndex) => (
                        <li key={linkIndex}>
                          <Link href={link.href}>
                            <span className="block py-2">{link.title}</span>
                          </Link>
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </nav>
  )
}
