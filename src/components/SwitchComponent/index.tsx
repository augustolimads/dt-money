import { ButtonComponent } from '../ButtonComponent'

export const SwitchComponent = () => {
  return (
    <div className="w-full grid grid-cols-2 gap-2 mb-4">
      <ButtonComponent btnColor="white">
        <img src="./Entradas.svg" alt="Entrada" />
        <span>Entrada</span>
      </ButtonComponent>
      <ButtonComponent btnColor="white">
        <img src="./Saídas.svg" alt="Saída" />
        <span>Saída</span>
      </ButtonComponent>
    </div>
  )
}
