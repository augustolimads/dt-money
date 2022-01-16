type ButtonComponentProp = {
  children: React.ReactNode
}

export const ButtonComponent = ({ children }: ButtonComponentProp) => {
  return (
    <button className="text-white bg-purple-800 rounded py-2 px-8">
      {children}
    </button>
  )
}
