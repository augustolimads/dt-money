import React, { createContext, useContext, useState } from 'react'

type ModalFormProps = {
  children: React.ReactNode
}

type ModalFormActions = {
  isModalOpen: boolean
  openButton: () => void
  closeButton: () => void
}

const ModalFormContext = createContext({})

export const ModalFormProvider = ({ children }: ModalFormProps) => {
  const [isModalOpen, setIsModalOpen] = useState(false)

  const openButton = () => {
    setIsModalOpen(true)
  }
  const closeButton = () => {
    setIsModalOpen(false)
  }

  return (
    <ModalFormContext.Provider value={{ isModalOpen, openButton, closeButton }}>
      {children}
    </ModalFormContext.Provider>
  )
}

export const useModalForm = () => {
  const { isModalOpen, openButton, closeButton } = useContext(
    ModalFormContext
  ) as ModalFormActions
  return { isModalOpen, openButton, closeButton }
}
