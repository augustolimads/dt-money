import React, { useState, useEffect } from 'react'

import { FaTimes } from 'react-icons/fa'
import { useModalForm } from 'src/hooks/ModalForm'
import { ButtonComponent } from '../ButtonComponent'
import { InputComponent } from '../InputComponent'
import { SwitchComponent } from '../SwitchComponent'

type inputDataProps = {
  name: string
  price: string
  switch: boolean
  category: string
}

export type switchChangeProps = {
  newSwitchValue: boolean
}

export const ModalFormComponent = () => {
  const [isSwitchActive, setIsSwitchActive] = useState(false)
  const [inputData, setInputData] = useState<inputDataProps>({
    name: '',
    price: '',
    switch: isSwitchActive,
    category: ''
  })
  const { isModalOpen, closeButton } = useModalForm()
  const modalMode = isModalOpen ? 'flex' : 'hidden'

  const handleChange = (evt) => {
    setInputData((oldData) => ({
      ...oldData,
      [evt.target.name]: evt.target.value
    }))
  }

  function switchChange(newState) {
    setIsSwitchActive(newState)
  }

  const submit = (evt) => {
    evt.preventDefault()
    console.log(inputData)
  }

  useEffect(() => {
    setInputData((oldData) => ({
      ...oldData,
      switch: isSwitchActive
    }))
  }, [isSwitchActive])

  return (
    <div
      className={`fixed w-full h-full flex justify-center items-center ${modalMode}`}
    >
      <div
        className="absolute bg-black bg-opacity-60 w-full h-full"
        onClick={closeButton}
      ></div>

      <div className="bg-white rounded sm:w-2/3 md:w-1/3 relative">
        <button className="p-2 absolute right-0" onClick={closeButton}>
          <FaTimes size={'1.1rem'} />
        </button>
        <form className=" flex flex-col p-10" onSubmit={submit}>
          <h2 className="text-slate-600 text-2xl font-bold mb-8">
            Cadastrar transação
          </h2>
          <InputComponent
            name="name"
            placeholder="Nome"
            value={inputData.name}
            onChange={handleChange}
          />
          <InputComponent
            name="price"
            placeholder="Preço"
            value={inputData.price}
            onChange={handleChange}
          />
          <SwitchComponent
            isActive={isSwitchActive}
            switchChange={switchChange}
          />
          <InputComponent
            name="category"
            placeholder="Categoria"
            value={inputData.category}
            onChange={handleChange}
          />
          <div className="h-2"></div>
          <ButtonComponent isBig btnColor="green" type="submit">
            Cadastrar
          </ButtonComponent>
        </form>
      </div>
    </div>
  )
}
