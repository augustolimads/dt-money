import { ButtonComponent } from 'src/components/ButtonComponent'
import { ContainerComponent } from 'src/components/ContainerComponent'
import { DisplayComponent } from 'src/components/DisplayComponent'
import { HeaderComponent } from 'src/components/HeaderComponent'
import { LogoComponent } from 'src/components/LogoComponent'

export const HomeTemplate = () => {
  return (
    <div>
      <HeaderComponent>
        <ContainerComponent>
          <nav className="pt-2 flex justify-between">
            <LogoComponent />
            <ButtonComponent />
          </nav>
          <div className="grid gap-2 grid-cols-3">
            <DisplayComponent />
            <DisplayComponent />
            <DisplayComponent />
          </div>
        </ContainerComponent>
      </HeaderComponent>
    </div>
  )
}
