import React, { useEffect, useState } from 'react'

type InputProps = {
  type?: string
  placeholder: string
  value: string
}

export const InputComponent = ({
  type,
  placeholder,
  value,
  errorMsg,
  ...rest
}: InputProps) => {
  const [localMsgError, setLocalMsgError] = useState('')
  useEffect(() => {
    setLocalMsgError(errorMsg)
  }, [errorMsg])

  return (
    <div className="flex flex-col  mb-4">
      <input
        className="border bg-gray-100 rounded p-4"
        type={type || 'text'}
        placeholder={placeholder}
        value={value}
        {...rest}
      />
      <span className="text-red-500">{localMsgError && localMsgError}</span>
    </div>
  )
}
