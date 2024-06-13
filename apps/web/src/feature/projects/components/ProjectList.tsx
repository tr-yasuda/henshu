import { IconSearch } from '@tabler/icons-react'
import { Link } from '@tanstack/react-router'
import clsx from 'clsx'
import { useState } from 'react'
import { useDropzone } from 'react-dropzone'
import { useTranslation } from 'react-i18next'
import { Card } from '../../../components/Card.tsx'
import { IconButton } from '../../../components/IconButton.tsx'
import { SearchInput } from '../../../components/SearchInput.tsx'
import { CreateProjectModal } from './CreateProjectModal.tsx'

// TODO: Replace with real data
const projectList: {
  id: number
  title: string
  description: string
  image: string
}[] = [
  {
    id: 1,
    title: 'Project One',
    description: 'Description for project one',
    image: 'path/to/image1.jpg',
  },
  {
    id: 2,
    title: 'Project Two',
    description: 'Description for project two',
    image: 'path/to/image2.jpg',
  },
]

export const ProjectList = () => {
  const [isSearchInputOpen, setIsSearchInputOpen] = useState(false)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [searchKeyword, setSearchKeyword] = useState('')
  const { t } = useTranslation()
  const [droppedVideoFile, setDroppedVideoFile] = useState<File | null>(null)
  const onDrop = (acceptedFiles: File[]) => {
    const videoFile = acceptedFiles[0]
    setDroppedVideoFile(videoFile)
    setIsModalOpen(true)
  }
  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
  })

  const handleCreateProject = (_project: {
    title: string
    description: string
  }) => {
    setIsModalOpen(false)
  }

  const handleOnSearch = (keyword: string) => {
    setSearchKeyword(keyword)
  }

  const handleButtonClick = () => {
    setIsSearchInputOpen((prev) => !prev)
  }

  return (
    <div className='container mx-auto px-4'>
      <h1 className='text-2xl font-bold mb-4'>
        {t('Projects')}
        <IconButton
          onClick={handleButtonClick}
          ariaLabel={'Search'}
          size={'xs'}
          className={'ml-2'}
        >
          <IconSearch size={16} />
        </IconButton>
      </h1>
      {isSearchInputOpen && (
        <SearchInput onSearch={handleOnSearch} className={'my-3'} />
      )}
      <div
        {...getRootProps()}
        className={clsx(
          'border-4 border-dashed rounded-lg p-4 mb-6',
          isDragActive ? 'border-blue-500 p-16' : 'border-gray-300',
        )}
      >
        <input {...getInputProps()} />
        {isDragActive ? (
          <p>{t('Drop the video files here...')}</p>
        ) : (
          <p>
            {t('Drag & drop some video files here, or click to select files')}
          </p>
        )}
      </div>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6'>
        {projectList
          .filter((project) =>
            project.title.toLowerCase().includes(searchKeyword),
          )
          .map((project) => (
            <Card key={project.id} className='flex flex-col'>
              <img
                className='w-full h-48 object-cover'
                src={project.image}
                alt={project.title}
              />
              <div className='flex-grow px-6 py-4'>
                <div className='font-bold text-xl mb-2'>{project.title}</div>
                <p className='text-gray-700 text-base'>{project.description}</p>
              </div>
              <div className='px-6 pt-4 pb-2'>
                <Link
                  to={`./${project.id}`}
                  className='text-blue-500 hover:text-blue-800'
                >
                  {t('Edit')}
                </Link>
              </div>
            </Card>
          ))}
        <CreateProjectModal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          onCreate={handleCreateProject}
          droppedVideoFile={droppedVideoFile}
        />
      </div>
    </div>
  )
}
