import { DisplayComponent } from 'src/components/DisplayComponent'
import { InputTableComponent } from 'src/components/InputTableComponent'
import { LayoutComponent } from 'src/components/LayoutComponent'

const example = [
  {
    title: 'picole',
    value: 1,
    category: 'Tchau',
    date: '2022-01-17',
    isIncome: false
  },
  {
    title: 'renda',
    value: 15000,
    category: 'Tchau',
    date: '2022-01-17',
    isIncome: true
  },
  {
    title: 'devendo',
    value: 15000,
    category: 'Tchau',
    date: '2022-01-17',
    isIncome: false
  }
]

export const HomeTemplate = () => {
  return (
    <LayoutComponent>
      <div className="bg-slate-100 relative flex-1">
        <div className="grid gap-8 grid-cols-3 -mt-16 absolute w-full">
          <DisplayComponent type="Entradas" value={1} />
          <DisplayComponent type="Saídas" value={1} />
          <DisplayComponent type="Total" hasGreenBg value={1} />
        </div>
        <div className="h-28"></div>
        <InputTableComponent data={example} />
      </div>
    </LayoutComponent>
  )
}
