import { Button } from '@/components/Button.tsx'
import { Input } from '@/components/Input.tsx'
import { Modal } from '@/components/Modal.tsx'
import { Textarea } from '@/components/Textarea.tsx'
import { useForm } from '@tanstack/react-form'
import { zodValidator } from '@tanstack/zod-form-adapter'
import { useEffect, useRef } from 'react'
import { useTranslation } from 'react-i18next'
import { z } from 'zod'

type CreateProjectModalProps = {
  isOpen: boolean
  onClose: () => void
  onCreate: (project: {
    title: string
    description: string
    video: File | null
  }) => void
  droppedVideoFile: File | null
}

export const CreateProjectModal = ({
  isOpen,
  onClose,
  onCreate,
  droppedVideoFile,
}: CreateProjectModalProps) => {
  const { t } = useTranslation()
  const videoRef = useRef<HTMLVideoElement>(null)
  const form = useForm({
    defaultValues: {
      title: '',
      description: '',
    },
    validators: {
      onChange: z.object({
        title: z.string().min(1).max(64),
        description: z.string().min(1).max(256),
      }),
    },
    validatorAdapter: zodValidator,
    onSubmit: async ({ value }) => {
      onCreate({
        title: value.title,
        description: value.description,
        video: droppedVideoFile,
      })
      onClose()
    },
  })

  useEffect(() => {
    if (droppedVideoFile && videoRef.current) {
      const url = URL.createObjectURL(droppedVideoFile)
      videoRef.current.src = url

      return () => {
        URL.revokeObjectURL(url)
      }
    }
  }, [droppedVideoFile])

  return (
    <Modal
      open={isOpen}
      onClose={onClose}
      title={t('Create Project')}
      disableBackdropClick
    >
      <div className='rounded-lg max-w-md w-full p-6 mx-auto'>
        <form
          className='mt-4 space-y-2'
          onSubmit={(e) => {
            e.preventDefault()
            e.stopPropagation()
            form.handleSubmit()
          }}
        >
          <form.Field
            name={'title'}
            validators={{
              onChange: z
                .string()
                .min(1, 'Please enter a title.')
                .max(64, 'Title must be less than 64 characters.'),
            }}
          >
            {(field) => (
              <>
                <label htmlFor='title' className='block text-gray-700'>
                  {t('Project Title')}
                </label>
                <Input
                  id='title'
                  value={field.state.value}
                  onChange={(e) => field.handleChange(e.target.value)}
                  errorMessage={t(field.state.meta.errors.toString())}
                  required
                />
              </>
            )}
          </form.Field>

          <form.Field
            name={'description'}
            validators={{
              onChange: z
                .string()
                .min(1, 'Please enter a description.')
                .max(256, 'Description must be less than 256 characters.'),
            }}
          >
            {(field) => (
              <>
                <label htmlFor='description' className='block text-gray-700'>
                  {t('Description')}
                </label>
                <Textarea
                  id='description'
                  value={field.state.value}
                  onChange={(e) => field.handleChange(e.target.value)}
                  errorMessage={t(field.state.meta.errors.toString().trim())}
                  required
                />
              </>
            )}
          </form.Field>

          {droppedVideoFile && (
            <div className='mt-4 mb-1'>
              <p className='text-gray-700'>
                {t('Video file:')} {droppedVideoFile.name}
              </p>
            </div>
          )}

          <video ref={videoRef} controls>
            <track kind='captions' />
          </video>

          <div className='mt-6 flex justify-end space-x-4'>
            <Button type='button' onClick={onClose} color={'gray'}>
              {t('Cancel')}
            </Button>
            <form.Subscribe
              selector={(state) => [state.canSubmit, state.isDirty]}
            >
              {([canSubmit, isDirty]) => (
                <Button
                  type='submit'
                  disabled={!canSubmit || !isDirty || !droppedVideoFile}
                >
                  {t('Create')}
                </Button>
              )}
            </form.Subscribe>
          </div>
        </form>
      </div>
    </Modal>
  )
}
