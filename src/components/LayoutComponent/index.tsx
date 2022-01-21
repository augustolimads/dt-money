import { ContainerComponent } from '../ContainerComponent'
import { LogoComponent } from '../LogoComponent'
import { ButtonComponent } from '../ButtonComponent'
import { ModalFormComponent } from '../ModalFormComponent'
import { useModalForm } from 'src/hooks/ModalForm'

type LayoutComponentProps = {
  children: React.ReactNode
}

export const LayoutComponent = ({ children }: LayoutComponentProps) => {
  const { openButton } = useModalForm()

  return (
    <div className="flex flex-col h-screen">
      <header className="bg-purple-900 h-48">
        <ContainerComponent>
          <nav className="pt-2 flex justify-between">
            <LogoComponent />
            <ButtonComponent onClick={openButton}>
              Nova Transação
            </ButtonComponent>
          </nav>
        </ContainerComponent>
      </header>
      <main className="bg-slate-50 flex-1 flex flex-col">
        <ContainerComponent>{children}</ContainerComponent>
      </main>
      <ModalFormComponent />
    </div>
  )
}
