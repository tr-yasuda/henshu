import {
  IconBrandFacebook,
  IconBrandGithub,
  IconBrandLinkedin,
} from '@tabler/icons-react'
import { Link } from '@tanstack/react-router'
import { type ChangeEvent, type ReactNode, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { MenuItem } from '../../../components/MenuItem.tsx'
import { Select } from '../../../components/Select.tsx'

const companyLinks = [
  { to: '#', text: 'About Us' },
  { to: '#', text: 'Careers' },
  { to: '/', text: 'Press' },
]

const supportLinks = [
  { to: '#', text: 'Help Center' },
  { to: '/contact-sales', text: 'Contact Us' },
  { to: '#', text: 'Privacy Policy' },
]

const socialLinks = [
  {
    href: 'https://www.facebook.com/yoshitada.yasuda.1997/',
    text: 'Facebook',
    Icon: IconBrandFacebook,
  },
  {
    href: 'https://www.linkedin.com/in/13931023b',
    text: 'LinkedIn',
    Icon: IconBrandLinkedin,
  },
  {
    href: 'https://github.com/tr-yasuda/henshu',
    text: 'GitHub',
    Icon: IconBrandGithub,
  },
]

type FooterLinkProps = {
  to: string
  children: ReactNode
}

export const FooterLink = ({ to, children }: FooterLinkProps) => (
  <li className='mb-2'>
    <Link to={to} className='text-gray-400 hover:text-white'>
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
              <FooterLink key={link.text} to={link.to}>
                {t(link.text)}
              </FooterLink>
            ))}
          </FooterSection>
          <FooterSection title={t('Support')}>
            {supportLinks.map((link) => (
              <FooterLink key={link.text} to={link.to}>
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
            &copy; 2024 Yoshitada Yasuda. {t('All rights reserved.')}
          </p>
        </div>
      </div>
    </footer>
  )
}
