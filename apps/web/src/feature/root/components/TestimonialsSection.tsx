import { useTranslation } from 'react-i18next'
import { Card } from '../../../components/Card.tsx'
import HanakoSato from '../images/hanako-sato.webp'
import IchiroTanaka from '../images/ichiro-tanaka.webp'
import TaroTakahashi from '../images/taro-takahashi.webp'

type Testimonial = {
  name: string
  role: string
  comment: string
  image: string
}

const testimonialList: Testimonial[] = [
  {
    name: 'Taro Takahashi',
    role: 'Designer',
    comment: 'The project went smoothly thanks to this app. Very easy to use.',
    image: TaroTakahashi,
  },
  {
    name: 'Hanako Sato',
    role: 'Video Producer',
    comment:
      'It has an excellent set of editing features and can handle any project. Support is also excellent.',
    image: HanakoSato,
  },
  {
    name: 'Ichiro Tanaka',
    role: 'Project Manager',
    comment:
      'I never thought it would be so easy to work together as a team. Highly recommended.',
    image: IchiroTanaka,
  },
]

const TestimonialCard = ({ name, role, comment, image }: Testimonial) => {
  const { t } = useTranslation()
  return (
    <Card color={'white'} className={'relative flex flex-col'}>
      <p className='text-lg flex-grow italic text-gray-700 mb-6'>
        "{t(comment)}"
      </p>
      <div className='flex items-center'>
        <img className='w-12 h-12 rounded-full' src={image} alt={name} />
        <div className='ml-4'>
          <p className='text-sm font-medium text-gray-900'>{t(name)}</p>
          <p className='text-sm text-gray-500'>{t(role)}</p>
        </div>
      </div>
    </Card>
  )
}

export const TestimonialsSection = () => {
  const { t } = useTranslation()
  return (
    <div className='py-12 bg-gray-100'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <h2 className='text-3xl font-extrabold text-center text-gray-900'>
          {t('User Testimonials')}
        </h2>
        <div className='mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
          {testimonialList.map((testimonial) => (
            <TestimonialCard key={testimonial.name} {...testimonial} />
          ))}
        </div>
      </div>
    </div>
  )
}
