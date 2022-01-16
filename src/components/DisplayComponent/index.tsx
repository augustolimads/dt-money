type DisplayComponentProps = {
  type: 'Entradas' | 'Saídas' | 'Total'
  value: number
  hasGreenBg?: boolean
}

export const DisplayComponent = ({
  type = 'Entradas',
  value = 0,
  hasGreenBg = false
}: DisplayComponentProps) => {
  const containerBg = hasGreenBg ? 'bg-green-400' : 'bg-white'
  const colorText = hasGreenBg ? 'text-white' : 'text-slate-900'
  const hasMinus = type === 'Saídas' ? '-' : ''
  const formatedValue = new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL'
  }).format(value)

  return (
    <div className={`${containerBg} p-6 rounded`}>
      <div className="flex justify-between">
        <h3 className={`text-center ${colorText}`}>{type}</h3>
        <img src={`./${type}.svg`} alt="entradas" />
      </div>
      <h2 className={`text-3xl font-semibold ${colorText} mt-2`}>
        {`${hasMinus}${formatedValue}`}
      </h2>
    </div>
  )
}
