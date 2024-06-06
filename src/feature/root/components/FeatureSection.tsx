import {
  IconMusic,
  IconScissors,
  IconSparkles,
  IconVideo,
} from '@tabler/icons-react'
import clsx from 'clsx'
import { useTranslation } from 'react-i18next'

const features = [
  {
    title: 'Easy Cut and Trim',
    description:
      'Quickly cut and trim unwanted parts of your videos with our intuitive interface.',
    icon: <IconScissors />,
  },
  {
    title: 'Add Effects',
    description:
      'Choose from a wide library of effects to enhance your videos and make them stand out.',
    icon: <IconSparkles />,
  },
  {
    title: 'Insert Music',
    description:
      'Easily add music to your videos. Select from our library or upload your own tracks.',
    icon: <IconMusic />,
  },
  {
    title: 'High-Quality Export',
    description:
      'Export your edited videos in high quality with support for various resolutions and formats.',
    icon: <IconVideo />,
  },
]

export const FeatureSection = () => {
  const { t } = useTranslation()

  return (
    <div className='py-12 bg-white'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='text-center'>
          <h2 className='text-base text-secondary-dark font-semibold tracking-wide uppercase'>
            {t('Features and Functions')}
          </h2>
          <p className='mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl'>
            {t('Key Features of Our App')}
          </p>
          <p className='mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto'>
            {t(
              'Providing a user-friendly and multi-functional video editing tool.',
            )}
          </p>
        </div>
        <div className='mt-10'>
          <dl className='space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10'>
            {features.map((feature) => (
              <div key={feature.title} className='relative'>
                <dt>
                  <div
                    className={clsx(
                      'absolute flex items-center justify-center h-12 w-12 rounded-md bg-secondary-darker text-white',
                    )}
                  >
                    {feature.icon}
                  </div>
                  <p className='ml-16 text-lg leading-6 font-medium text-gray-900'>
                    {t(feature.title)}
                  </p>
                </dt>
                <dd className='mt-2 ml-16 text-base text-gray-500'>
                  {t(feature.description)}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  )
}
