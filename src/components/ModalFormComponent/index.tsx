import React, { ReactEventHandler, useState } from 'react'

import { FaTimes } from 'react-icons/fa'
import { ButtonComponent } from '../ButtonComponent'
import { InputComponent } from '../InputComponent'
import { SwitchComponent } from '../SwitchComponent'

export const ModalFormComponent = () => {
  const [isModalOpen, setIsModalOpen] = useState('flex')

  const openButton = (evt: React.MouseEvent<HTMLElement>) => {
    evt.preventDefault()
    setIsModalOpen('flex')
  }
  const closeButton = (evt: React.MouseEvent<HTMLElement>) => {
    evt.preventDefault()
    setIsModalOpen('hidden')
  }

  return (
    <div
      className={`fixed w-full h-full flex justify-center items-center ${isModalOpen}`}
    >
      <div
        className="absolute bg-black bg-opacity-60 w-full h-full"
        onClick={closeButton}
      ></div>

      <div className="bg-white rounded sm:w-2/3 md:w-1/3 relative">
        <button className="p-2 absolute right-0" onClick={closeButton}>
          <FaTimes size={'1.1rem'} />
        </button>
        <form className=" flex flex-col p-10">
          <h2 className="text-slate-600 text-2xl font-bold mb-8">
            Cadastrar transação
          </h2>
          <InputComponent placeholder="Nome" value="" />
          <InputComponent placeholder="Preço" value="" />
          <SwitchComponent />
          <InputComponent placeholder="Categoria" value="" />
          <div className="h-2"></div>
          <ButtonComponent isBig btnColor="green">
            Cadastrar
          </ButtonComponent>
        </form>
      </div>
    </div>
  )
}
