type InputProps = {
  type?: string
  placeholder: string
  value: string
}

export const InputComponent = ({ type, placeholder, value }: InputProps) => {
  return (
    <input
      className="border bg-gray-100 rounded p-4 mb-4"
      type={type || 'text'}
      placeholder={placeholder}
      value={value}
    />
  )
}
