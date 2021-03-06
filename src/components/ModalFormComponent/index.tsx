import React, { useState, useEffect } from 'react'

import { object, string, number, boolean } from 'yup'
import { v4 as uuidv4 } from 'uuid'
import { FaTimes } from 'react-icons/fa'
import { useModalForm } from 'src/hooks/ModalForm'
import { ButtonComponent } from '../ButtonComponent'
import { InputComponent } from '../InputComponent'
import { SwitchComponent } from '../SwitchComponent'
import { useEntryData } from 'src/hooks/EntryData'

type inputDataProps = {
  name: string
  price: string
  isIncome: boolean
  category: string
}

type errorProps = any

export type switchChangeProps = {
  newSwitchValue: boolean
}

const userSchema = object({
  name: string().min(3, 'deve ter no mínimo 3 caracteres'),
  price: number().required(),
  isIncome: boolean().required(),
  category: string().min(3, 'deve ter no mínimo 3 caracteres')
})

export const ModalFormComponent = () => {
  const initialState = {
    name: '',
    price: '',
    isIncome: false,
    category: ''
  }

  const [isSwitchActive, setIsSwitchActive] = useState(false)
  const [errorMsg, setErrorMsg] = useState<errorProps>({})
  const [inputData, setInputData] = useState<inputDataProps>(initialState)
  const { isModalOpen, closeButton } = useModalForm()
  const { registerEntry } = useEntryData()
  const modalMode = isModalOpen ? 'flex' : 'hidden'

  const clearForm = () => {
    setIsSwitchActive(false)
    setInputData(initialState)
  }

  const closeModal = () => {
    closeButton()
    clearForm()
  }

  const handleChange = (evt: React.ChangeEvent<HTMLInputElement>) => {
    setInputData((oldData) => ({
      ...oldData,
      [evt.target.name]: evt.target.value
    }))
  }

  const switchChange = (newState: boolean) => {
    setIsSwitchActive(newState)
  }

  const submit = async (evt: React.FormEvent<HTMLFormElement>) => {
    evt.preventDefault()
    try {
      await userSchema.validate(inputData)
      const formatedData = {
        ...inputData,
        date: new Intl.DateTimeFormat('pt-BR').format(new Date()),
        id: uuidv4()
      }
      clearForm()
      closeButton()
      registerEntry(formatedData)
    } catch (err: errorProps) {
      setErrorMsg({ path: err.path, error: err.errors[0] })
    }
  }

  const hasError = (type: string) => {
    if (type === errorMsg.path) {
      return errorMsg.error
    }
  }

  useEffect(() => {
    setInputData((oldData) => ({
      ...oldData,
      isIncome: isSwitchActive
    }))
  }, [isSwitchActive])

  return (
    <div
      className={`fixed w-full h-full flex justify-center items-center ${modalMode}`}
    >
      <div
        className="absolute bg-black bg-opacity-60 w-full h-full"
        onClick={closeModal}
      ></div>

      <div className="bg-white rounded sm:w-2/3 md:w-1/3 relative">
        <button className="p-2 absolute right-0" onClick={closeModal}>
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
            errorMsg={hasError('name')}
          />
          <InputComponent
            name="price"
            placeholder="Preço"
            value={inputData.price}
            onChange={handleChange}
            errorMsg={hasError('price')}
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
            errorMsg={hasError('category')}
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
