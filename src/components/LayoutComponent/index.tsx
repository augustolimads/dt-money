import { ContainerComponent } from '../ContainerComponent'
import { LogoComponent } from '../LogoComponent'
import { ButtonComponent } from '../ButtonComponent'

type LayoutComponentProps = {
  children: React.ReactNode
}

export const LayoutComponent = ({ children }: LayoutComponentProps) => {
  return (
    <div>
      <header className="bg-purple-900 h-48">
        <ContainerComponent>
          <nav className="pt-2 flex justify-between">
            <LogoComponent />
            <ButtonComponent>Nova Transação</ButtonComponent>
          </nav>
        </ContainerComponent>
      </header>
      <ContainerComponent>{children}</ContainerComponent>
    </div>
  )
}
