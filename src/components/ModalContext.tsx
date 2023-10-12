import React, { useMemo, useState } from 'react'
import Modal from './Modal'

interface ModalContextProviderState {
  title: string
  content: React.ReactElement | null
  isOpen: boolean
  showModal: (component: React.ReactElement) => void
  hideModal: () => void
  onClose: () => void
}

const initialState: ModalContextProviderState = {
  title: '',
  content: null,
  isOpen: false,
  showModal: () => {},
  hideModal: () => {},
  onClose: () => {},
}
const ModalContext = React.createContext(initialState)

type ModalContextProviderProps = {
  children: React.ReactNode
}

function ModalContextProvider({ children }: ModalContextProviderProps) {
  const [title, setTitle] = useState<string>('')
  const [content, setContent] = useState<any>(null)

  const showModal = (c: any) => {
    setContent(c)
  }

  const hideModal = () => {
    setContent(null)
  }

  const isOpen = useMemo(() => content !== null, [content])

  return (
    <ModalContext.Provider
      value={{
        title,
        content,
        isOpen,
        showModal,
        hideModal,
        onClose: hideModal,
      }}
    >
      {children}
      <Modal />
    </ModalContext.Provider>
  )
}

export { ModalContextProvider, ModalContext }
