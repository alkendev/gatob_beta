import Link from 'next/link'
import { FaFacebook } from 'react-icons/fa'
import { ImYoutube2 } from 'react-icons/im'
import { FaInstagram } from 'react-icons/fa'
import { SlSocialVkontakte } from 'react-icons/sl'
import { FaTelegramPlane } from 'react-icons/fa'
import { FaXTwitter } from 'react-icons/fa6'

const socialIcons = [
  { icon: <FaFacebook />, href: '/' },
  { icon: <ImYoutube2 />, href: '/' },
  { icon: <FaInstagram />, href: '/' },
  { icon: <SlSocialVkontakte />, href: '/' },
  { icon: <FaXTwitter />, href: '/' },
  { icon: <FaTelegramPlane />, href: '/' },
]

const sections = [
  {
    title: 'Репертуар',
    links: [{ href: '/about', text: 'Афиша' }],
  },
  {
    title: 'О театре',
    links: [
      { href: '/about', text: 'История театра' },
      { href: '/about', text: 'Новости' },
      { href: '/about', text: 'СМИ о нас' },
      { href: '/about', text: 'Схема зала' },
      { href: '/about', text: 'Наш коллектив' },
      { href: '/about', text: 'О музее театра' },
      { href: '/about', text: 'Государственные закупки' },
      { href: '/about', text: 'Комплаенс служба' },
      { href: '/about', text: 'Финансовая отчетность' },
      { href: '/about', text: 'Вакансии' },
    ],
  },
  {
    title: 'Контакты',
    links: [
      { href: '/about', text: 'Адрес: 050000, г. Алматы, ул. Кабанбай Батыра, 110' },
      { href: '/about', text: 'E-mail: kense.gatob@mail.ru' },
      { href: '/about', text: 'WhatsApp: +7 776 740 42 46' },
      { href: '/about', text: 'Касса: + 7 (727) 272-79-34' },
      {
        href: '/about',
        text: 'режим работы: с понедельника по воскресенье, с 10.00 до 18.00 (перерыв с 14.00 до 15.00)',
      },
    ],
  },
]

const Footer = () => {
  return (
    <footer className="bg-red-950 text-white py-10">
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-8">
        <div>
          <h2 className="text-2xl font-bold mb-4">КазНТОБ им. Абая</h2>
          <p className="text-gray-400">один из ведущих оперных театров Казахстана</p>
          <div className="flex text-2xl items-center gap-6 mt-4">
            {socialIcons.map((item, index) => (
              <Link
                key={index}
                href={item.href}
              >
                {item.icon}
              </Link>
            ))}
          </div>
        </div>

        {sections.map((section, index) => (
          <div key={index}>
            <h2 className="text-xl font-bold mb-4">{section.title}</h2>
            <ul className="space-y-2">
              {section.links.map((link, linkIndex) => (
                <li key={linkIndex}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:underline"
                  >
                    {link.text}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="mt-8 text-center text-gray-400">&copy; {new Date().getFullYear()} Все права защищены</div>
    </footer>
  )
}

export default Footer
