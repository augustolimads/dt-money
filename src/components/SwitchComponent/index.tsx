import { ButtonComponent } from '../ButtonComponent'
import { switchChangeProps } from '../ModalFormComponent'

export const SwitchComponent = ({ isActive, switchChange }) => {
  const bgIncomeActive = isActive ? 'lightGreen' : 'white'
  const bgOutcomeActive = !isActive ? 'lightRed' : 'white'

  const switchIcome = () => {
    switchChange(true)
  }
  const switchOutcome = () => {
    switchChange(false)
  }

  return (
    <div className="w-full grid grid-cols-2 gap-2 mb-4">
      <ButtonComponent
        btnColor={bgIncomeActive}
        type="button"
        onClick={switchIcome}
      >
        <img src="./Entradas.svg" alt="Entrada" />
        <span className="text-slate-900">Entrada</span>
      </ButtonComponent>
      <ButtonComponent
        btnColor={bgOutcomeActive}
        type="button"
        onClick={switchOutcome}
      >
        <img src="./Saídas.svg" alt="Saída" />
        <span className="text-slate-900">Saída</span>
      </ButtonComponent>
    </div>
  )
}
