type InputTableProps = {
  data: {
    id: string
    name: string
    price: string
    category: string
    date: string
    isIncome: boolean
  }[]
}

export const InputTableComponent = ({ data }: InputTableProps) => {
  return (
    <table className="w-full table-auto text-slate-400 font-medium">
      <thead>
        <tr>
          <th className="font-normal text-left py-2 px-6 w-1/2">Título</th>
          <th className="font-normal text-left py-2 px-6">Preço</th>
          <th className="font-normal text-left py-2 px-6">Categoria</th>
          <th className="font-normal text-left py-2 px-6 ">Data</th>
        </tr>
      </thead>
      <tbody>
        {data &&
          data.map((row) => {
            const valueColor = row.isIncome ? 'text-green-300' : 'text-red-500'
            const formatedValue = new Intl.NumberFormat('pt-BR', {
              style: 'currency',
              currency: 'BRL'
            }).format(Number(row.price))

            console.log(row.isIncome)

            return (
              <tr
                key={row.id}
                className="bg-white border-b-8 border-slate-100 rounded-md"
              >
                <td className="py-4 px-6 text-slate-900">{row.name}</td>
                <td className={`py-4 px-6 ${valueColor}`}>{formatedValue}</td>
                <td className="py-4 px-6">{row.category}</td>
                <td className="py-4 px-6">{row.date}</td>
              </tr>
            )
          })}
      </tbody>
    </table>
  )
}
