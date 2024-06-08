import {
  IconBrandFacebook,
  IconBrandGithub,
  IconBrandInstagram,
  IconBrandX,
} from '@tabler/icons-react'
import { Link } from '@tanstack/react-router'
import { type ChangeEvent, type ReactNode, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { MenuItem } from '../../../components/MenuItem.tsx'
import { Select } from '../../../components/Select.tsx'

const companyLinks = [
  { href: '#', text: 'About Us' },
  { href: '#', text: 'Careers' },
  { href: '/', text: 'Press' },
]

const supportLinks = [
  { href: '#', text: 'Help Center' },
  { href: '/', text: 'Contact Us' },
  { href: '#', text: 'Privacy Policy' },
]

const socialLinks = [
  { href: '#', text: 'Facebook', Icon: IconBrandFacebook },
  { href: '#', text: 'X', Icon: IconBrandX },
  { href: '#', text: 'Instagram', Icon: IconBrandInstagram },
  {
    href: 'https://github.com/tr-yasuda/henshu',
    text: 'GitHub',
    Icon: IconBrandGithub,
  },
]

type FooterLinkProps = {
  href: string
  children: ReactNode
}

export const FooterLink = ({ href, children }: FooterLinkProps) => (
  <li className='mb-2'>
    <Link href={href} className='text-gray-400 hover:text-white'>
      {children}
    </Link>
  </li>
)

type FooterSectionProps = {
  title: string
  children: ReactNode
}

export const FooterSection = ({ title, children }: FooterSectionProps) => (
  <div>
    <h3 className='text-xl font-bold mb-4'>{title}</h3>
    <ul>{children}</ul>
  </div>
)

export const Footer = () => {
  const { i18n, t } = useTranslation()
  const [language, setLanguage] = useState<string>(i18n.language)

  const handleLanguageChange = (event: ChangeEvent<HTMLSelectElement>) => {
    const selectedLanguage = event.target.value
    i18n
      .changeLanguage(selectedLanguage)
      .then(() => setLanguage(selectedLanguage))
  }

  return (
    <footer className='bg-gray-800 text-white py-8'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8'>
          <FooterSection title={t('Company')}>
            {companyLinks.map((link) => (
              <FooterLink key={link.text} href={link.href}>
                {t(link.text)}
              </FooterLink>
            ))}
          </FooterSection>
          <FooterSection title={t('Support')}>
            {supportLinks.map((link) => (
              <FooterLink key={link.text} href={link.href}>
                {t(link.text)}
              </FooterLink>
            ))}
          </FooterSection>
          <FooterSection title={t('Follow Us')}>
            <ul className='flex space-x-4'>
              {socialLinks.map((link) => (
                <li key={link.text}>
                  <a
                    href={link.href}
                    className='text-gray-400 hover:text-white flex items-center space-x-2'
                  >
                    <link.Icon size={20} />
                  </a>
                </li>
              ))}
            </ul>
          </FooterSection>
          <FooterSection title={t('Contact')}>
            <p className='text-gray-400'>
              Email:{' '}
              <a
                href='mailto:102336695+tr-yasuda@users.noreply.github.com'
                className='hover:text-white'
              >
                102336695+tr-yasuda@users.noreply.github.com
              </a>
            </p>
          </FooterSection>
        </div>
        <div className='mt-8 border-t border-gray-700 pt-4 flex flex-col md:flex-row justify-between items-center'>
          <div className='space-x-2 flex items-center'>
            <img
              src='./logo.webp'
              alt='Henshu logo'
              className='h-8 w-auto mr-1'
            />
            <p className='font-semibold'>Henshu</p>
          </div>
          <Select
            autoWidth
            value={language}
            onChange={handleLanguageChange}
            className='mt-4 md:mt-0'
          >
            <MenuItem value='en'>English</MenuItem>
            <MenuItem value='ja'>日本語</MenuItem>
          </Select>
        </div>
        <div className='text-center mt-4'>
          <p className='text-gray-400'>
            &copy; 2024 tr-yasuda. {t('All rights reserved.')}
          </p>
        </div>
      </div>
    </footer>
  )
}
