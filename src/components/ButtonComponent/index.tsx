type ButtonComponentProp = {
  children: React.ReactNode
  isBig?: boolean
  btnColor?: 'green' | 'purple' | 'white'
}

export const ButtonComponent = ({
  children,
  isBig,
  btnColor = 'purple'
}: ButtonComponentProp) => {
  const buttonBig = isBig ? 'py-4' : 'py-2'
  const colorList = {
    purple: 'bg-purple-800',
    green: 'bg-green-400',
    white: 'bg-white border-2 text-slate-900'
  }
  const buttonColor = colorList[btnColor]

  return (
    <button
      className={`text-white ${buttonColor} rounded ${buttonBig} px-8 flex items-center justify-center space-x-2`}
    >
      {children}
    </button>
  )
}
