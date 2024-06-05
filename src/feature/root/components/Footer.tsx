import { IconBrandGithub } from '@tabler/icons-react'
import { type ChangeEvent, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { MenuItem } from '../../../components/MenuItem.tsx'
import { Select } from '../../../components/Select.tsx'

export const Footer = () => {
  const { i18n } = useTranslation()
  const [language, setLanguage] = useState<string>(i18n.language)

  const handleLanguageChange = (event: ChangeEvent<HTMLSelectElement>) => {
    const selectedLanguage = event.target.value
    i18n
      .changeLanguage(selectedLanguage)
      .then(() => setLanguage(selectedLanguage))
  }
  return (
    <footer className='text-primary p-4 mt-auto'>
      <div className='container mx-auto flex justify-between'>
        <div className={'space-x-2 flex items-center'}>
          <p className={'font-semibold'}>Henshu</p>
          <a href={'https://github.com/tr-yasuda/henshu'}>
            <IconBrandGithub size={20} />
          </a>
        </div>
        <Select autoWidth value={language} onChange={handleLanguageChange}>
          <MenuItem value={'en'}>English</MenuItem>
          <MenuItem value={'ja'}>日本語</MenuItem>
        </Select>
      </div>
    </footer>
  )
}
